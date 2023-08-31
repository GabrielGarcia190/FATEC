import 'package:flutter/material.dart';

void main() {
  runApp(const SalaryCalculatorApp());
}

class SalaryCalculatorApp extends StatelessWidget {
  const SalaryCalculatorApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculadora do Pagode R\$',
      theme: ThemeData(
        primarySwatch: Colors.amber,
      ),
      home: const SalaryCalculatorScreen(),
    );
  }
}

class SalaryCalculatorScreen extends StatefulWidget {
  const SalaryCalculatorScreen({Key? key}) : super(key: key);

  @override
  _SalaryCalculatorScreenState createState() => _SalaryCalculatorScreenState();
}

class _SalaryCalculatorScreenState extends State<SalaryCalculatorScreen> {
  double grossSalary = 0.0;
  double netSalary = 0.0;

  void calculateNetSalary() {
    double socialSecurity = grossSalary * 0.10;
    double tax = (grossSalary - socialSecurity) * 0.05;
    netSalary = grossSalary - socialSecurity - tax;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Calculadora do Pagode R\$'),
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
                  grossSalary = double.tryParse(value) ?? 0.0;
                });
              },
              decoration: InputDecoration(
                labelText: 'Salário sem descontos',
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: calculateNetSalary,
              child: const Text('Calcular'),
            ),
            const SizedBox(height: 20),
            Text('Salário liquido: $netSalary'),
          ],
        ),
      ),
    );
  }
}
