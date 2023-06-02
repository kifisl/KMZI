using System;

namespace Cripta_Lab3
{
    class Program
    {
        static void Main(string[] args)
        {
            NOD Nod = new NOD();
            PrimeNumber Prime = new PrimeNumber();
            
            Prime.printInterval(2, 471);
            Prime.printLog(471);

            Console.WriteLine("-------------------------------");
            Prime.printInterval(431, 471);

            Console.WriteLine("-------------------------------");
            Prime.printPrime(431471);
            Prime.printPrime(431479);

            Console.WriteLine("-------------------------------");
            Console.WriteLine("НОД(431, 471) = " + Nod.Nod2(431, 471));
            Console.WriteLine("НОД(52,26,13) = " + Nod.Nod3(12, 42, 18));

        }
    }
}
