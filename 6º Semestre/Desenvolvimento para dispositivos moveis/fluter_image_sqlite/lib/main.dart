import 'dart:io';
import 'package:flutter/material.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'package:image_picker/image_picker.dart';

void main() => runApp(MyApp());

class Item {
  int id;
  String name;
  String imagePath;

  Item({required this.id, required this.name, required this.imagePath});

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'imagePath': imagePath,
    };
  }

  factory Item.fromMap(Map<String, dynamic> map) {
    return Item(
      id: map['id'],
      name: map['name'],
      imagePath: map['imagePath'],
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Database _database;
  List<Item> _items = [];

  @override
  void initState() {
    super.initState();
    _initDatabase();
    _loadItems();
  }

  Future<void> _initDatabase() async {
    final Directory documentsDirectory =
        await getApplicationDocumentsDirectory();
    final String path = join(documentsDirectory.path, 'my_database.db');

    _database = await openDatabase(
      path,
      version: 1,
      onCreate: (Database db, int version) async {
        await db.execute(
          'CREATE TABLE items (id INTEGER PRIMARY KEY, name TEXT, imagePath TEXT)',
        );
      },
    );
  }

  Future<void> _loadItems() async {
    final List<Map<String, dynamic>> maps = await _database.query('items');
    setState(() {
      _items = List.generate(
        maps.length,
        (index) => Item.fromMap(maps[index]),
      );
    });
  }

  Future<void> _addItem() async {
    final imagePicker = ImagePicker();
    final pickedFile = await imagePicker.getImage(source: ImageSource.gallery);

    if (pickedFile != null) {
      final item = Item(name: 'Item Name', imagePath: pickedFile.path);
      await _database.insert('items', item.toMap());
      _loadItems();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('CRUD SQLite e Imagens'),
      ),
      body: ListView.builder(
        itemCount: _items.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(_items[index].name),
            leading: Image.file(File(_items[index].imagePath)),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addItem,
        child: Icon(Icons.add),
      ),
    );
  }
}
