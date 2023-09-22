import 'package:flutter/material.dart';
import 'drawer.dart';
import 'db.dart';
import "./edit_screen.dart";

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.deepPurple),
      title: 'SQLite in Flutter',
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final DatabaseHelper dbHelper = DatabaseHelper();

  TextEditingController nameController = TextEditingController();
  TextEditingController ageController = TextEditingController();
  TextEditingController imageController = TextEditingController();
  String gender = 'Male'; // Default gender value

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SQLite com Flutter'),
      ),
      drawer: const DrawerWidget(),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            TextField(
              controller: nameController,
              decoration: const InputDecoration(labelText: 'Name'),
            ),
            const SizedBox(height: 16.0),
            TextField(
              controller: ageController,
              decoration: const InputDecoration(labelText: 'Age'),
              keyboardType: TextInputType.number,
            ),
            const SizedBox(height: 16.0),
            TextField(
              controller: imageController,
              decoration: const InputDecoration(labelText: 'Image'),
            ),
            const SizedBox(height: 16.0),
            DropdownButton<String>(
              value: gender,
              onChanged: (String? newValue) {
                setState(() {
                  gender = newValue!;
                });
              },
              items: <String>['Male', 'Female', 'Other']
                  .map<DropdownMenuItem<String>>((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value),
                );
              }).toList(),
            ),
            const SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: () async {
                final name = nameController.text;
                final age = int.tryParse(ageController.text) ?? 0;
                final imageUrl = imageController.text;
                final result =
                    await dbHelper.insertUser(name, age, gender, imageUrl);
                if (result != null && result > 0) {
                  setState(() {
                    nameController.clear();
                    ageController.clear();
                    gender = 'Male';
                  });
                }
              },
              child: const Text('Add User'),
            ),
            const SizedBox(height: 8.0),
            Expanded(
              child: FutureBuilder<List<Map<String, dynamic>>>(
                future: dbHelper.getUsers(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const CircularProgressIndicator();
                  } else if (snapshot.hasError) {
                    return Text('Error: ${snapshot.error}');
                  } else {
                    final users = snapshot.data ?? [];
                    return ListView.builder(
                      itemCount: users.length,
                      itemBuilder: (context, index) {
                        final user = users[index];
                        final userName = user['name'];
                        final userAge = user['age'];
                        final userGender = user['gender'] ?? '';
                        final userImage = user['image'] ?? '';
                        //add delete button
                        return ListTile(
                          title: Text(userName),
                          subtitle: Text('Age: $userAge, Gender: $userGender'),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              if (userImage.isNotEmpty)
                                CircleAvatar(
                                  backgroundImage: NetworkImage(userImage),
                                ),
                              EditButton(id: user['id']),
                              const SizedBox(width: 8.0),
                              DeleteButton(
                                  id: user['id'],
                                  onDelete: () {
                                    setState(() {});
                                  }),
                            ],
                          ),
                        );
                      },
                    );
                  }
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class EditButton extends StatelessWidget {
  final int id;

  const EditButton({
    required this.id,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => EditScreen(
              id: id,
            ),
          ),
        );
      },
      child: const Text('Edit'),
    );
  }
}

class DeleteButton extends StatelessWidget {
  final int id;
  final Function? onDelete;

  const DeleteButton({
    required this.id,
    this.onDelete,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () async {
        final dbHelper = DatabaseHelper();
        await dbHelper.deleteUser(id);
        if (onDelete != null) {
          onDelete!();
        }
      },
      child: const Text('Delete'),
    );
  }
}
