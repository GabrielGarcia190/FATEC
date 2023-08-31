import 'package:flutter/material.dart';

 

void main() {
  runApp(const SalaryCalculatorApp());
}

 

class SalaryCalculatorApp extends StatelessWidget {
  const SalaryCalculatorApp({Key? key}) : super(key: key);

 

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Salary Calculator',
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
    double previdencia = grossSalary * 0.10;
    double imposto = (grossSalary - previdencia) * 0.05;
    netSalary = grossSalary - previdencia - imposto;
    setState(() {});
  }

 

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Calculdora de salário'),
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
              decoration: const InputDecoration(
                labelText: 'Salário Bruto',
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