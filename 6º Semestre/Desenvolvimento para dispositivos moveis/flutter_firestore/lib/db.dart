// db.dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  Database? _database;

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDatabase();
    return _database!;
  }

  Future<Database> _initDatabase() async {
    // código para inicialização do banco de dados
    String databasesPath = await getDatabasesPath();
    String dbPath = join(databasesPath, 'my_database.db');

    return await openDatabase(
      dbPath,
      version: 5,
      onCreate: _onCreate,
      onUpgrade: _onUpgrade,
    );
  }

  Future<void> _onCreate(Database db, int version) async {
    await db.execute('''
      CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER,
        gender TEXT,
        image TEXT
      )
    ''');
  }

  Future<void> _onUpgrade(Database db, int oldVersion, int newVersion) async {
    if (oldVersion < 2) {
      await db.execute('ALTER TABLE users ADD COLUMN gender TEXT');
    }
  }

  Future<int> insertUser(
      String name, int age, String gender, String image) async {
    final Map<String, dynamic> values = {
      'name': name,
      'age': age,
      'gender': gender,
      'image': image
    };
    final db = await database;
    return await db.insert('users', values);
  }

  Future<Map<String, dynamic>> getUser(int id) async {
    final db = await database;
    final List<Map<String, dynamic>> users =
        await db.query('users', where: 'id = ?', whereArgs: [id]);
    return users.first;
  }

  Future<List<Map<String, dynamic>>> getUsers() async {
    final db = await database;
    return await db.query('users');
  }

  Future<int> updateUser(
      int id, String name, int age, String gender, String image) async {
    final db = await database;
    final Map<String, dynamic> values = {
      'name': name,
      'age': age,
      'gender': gender,
      'image': image
    };
    return await db.update('users', values, where: 'id = ?', whereArgs: [id]);
  }

  //delete user
  Future<int> deleteUser(int id) async {
    final db = await database;
    return await db.delete('users', where: 'id = ?', whereArgs: [id]);
  }
}
