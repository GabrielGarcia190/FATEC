import 'package:flutter/material.dart';

void main() {
  runApp(const RainConverterApp());
}

class RainConverterApp extends StatelessWidget {
  const RainConverterApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Rain Converter',
      theme: ThemeData(
        primarySwatch: Colors.amber,
      ),
      home: const RainConverterScreen(),
    );
  }
}

class RainConverterScreen extends StatefulWidget {
  const RainConverterScreen({Key? key}) : super(key: key);

  @override
  _RainConverterScreenState createState() => _RainConverterScreenState();
}

class _RainConverterScreenState extends State<RainConverterScreen> {
  double inputValue = 0.0;
  double resultValue = 0.0;

  void convertRain() {
    setState(() {
      resultValue = inputValue * 25.4;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Conversor de Chuvas'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              keyboardType: TextInputType.number,
              onChanged: (value) {
                setState(() {
                  inputValue = double.tryParse(value) ?? 0.0;
                });
              },
              decoration: const InputDecoration(
                labelText: 'Chuva em polegadas',
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: convertRain,
              child: const Text('Conversor'),
            ),
            const SizedBox(height: 20),
              Text('Equivalente em milimetros: $resultValue mm'),
          ],
        ),
      ),
    );
  }
}
