## SOLID

Aquí tienes las definiciones breves de los principios SOLID junto con ejemplos de código:

### 1. Single Responsibility Principle (SRP)
Definición: Una clase debe tener una única razón para cambiar.

### typescript
class Report {
    generateReport(data: string): string {
        return `Informe generado con datos: ${data}`;
    }
}

class ReportPrinter {
    print(report: string): void {
        console.log(report);
    }
}

### 2. Open/Closed Principle (OCP)
Definición: Las entidades deben estar abiertas para la extensión, pero cerradas para la modificación.

### typescript
abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

### 3. Liskov Substitution Principle (LSP)
Definición: Los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin alterar el funcionamiento.

### typescript
class Bird {
    fly(): void {
        console.log("El pájaro vuela");
    }
}

class Sparrow extends Bird {}

class Ostrich extends Bird {
    fly(): void {
        throw new Error("El avestruz no puede volar");
    }
}

### 4. Interface Segregation Principle (ISP)
Definición: Un cliente no debe depender de interfaces que no utiliza.

### typescript
interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

class MultiFunctionPrinter implements Printer, Scanner {
    print(): void {
        console.log("Imprimiendo...");
    }

    scan(): void {
        console.log("Escaneando...");
    }
}

### 5. Dependency Inversion Principle (DIP)
Definición: Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.

### typescript
class Database {
    connect(): void {
        console.log("Conectando a la base de datos...");
    }
}

class UserService {
    constructor(private database: Database) {}

    saveUser(user: string): void {
        this.database.connect();
        console.log(`Usuario ${user} guardado.`);
    }
}
