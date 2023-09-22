import "package:flutter/material.dart";

class DrawerWidget extends StatelessWidget {
  const DrawerWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width * 0.8,
      color: Colors.white,
      child: Column(
        children: [
          ElevatedButton(onPressed: () => {}, child: const Text("Botão")),
          ElevatedButton(onPressed: () => {}, child: const Text("Botão")),
          ElevatedButton(onPressed: () => {}, child: const Text("Botão")),
          ElevatedButton(onPressed: () => {}, child: const Text("Botão")),
          ElevatedButton(onPressed: () => {}, child: const Text("Botão")),
        ],
      ),
    );
  }
}
