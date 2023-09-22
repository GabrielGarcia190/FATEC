import 'package:flutter/material.dart';
import 'db.dart';

class EditScreen extends StatefulWidget {
  final int id;

  const EditScreen({required this.id});

  @override
  _EditScreenState createState() => _EditScreenState();
}

class _EditScreenState extends State<EditScreen> {
  final DatabaseHelper dbHelper = DatabaseHelper();
  late String name;
  late int age;
  late String selectedGender = 'Male'; // Initialize with an empty string
  TextEditingController nameController = TextEditingController();
  TextEditingController ageController = TextEditingController();
  TextEditingController imageController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _fetchUserDetails();
  }

  Future<void> _fetchUserDetails() async {
    final user = await dbHelper.getUser(widget.id);
    name = user['name'];
    age = user['age'];
    selectedGender = user['gender'] ?? '';
    nameController.text = name;
    ageController.text = age.toString();
    imageController.text = user['image'] ?? '';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Edit User'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            //render image avatar
            CircleAvatar(
              radius: 100.0,
              backgroundImage: NetworkImage(imageController.text),
            ),
            const SizedBox(height: 16.0),
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
              value: selectedGender,
              onChanged: (String? newValue) {
                setState(() {
                  selectedGender = newValue!;
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
                final updatedName = nameController.text;
                final updatedAge = int.tryParse(ageController.text) ?? 0;
                final imageUrl = imageController.text;
                await dbHelper.updateUser(widget.id, updatedName, updatedAge,
                    selectedGender, imageUrl);
                Navigator.pop(context, true); // Navigate back after updating
              },
              child: const Text('Save'),
            ),
          ],
        ),
      ),
    );
  }
}
