using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Cripta_Lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            string f;
            string name_eng = "Yeliseyeva Anastasiya Denisovna";
            name_eng = name_eng.Replace(" ", "").ToLower();

            string name_bel = "ЕлисееваАнастасияДенисовна";
            name_bel = name_bel.Replace(" ", "").ToLower();

            Entropia_Shennon shan = new Entropia_Shennon();

            Console.WriteLine("-------------1-2---------------\n");

            //bel
            f = shan.data_file_str("BEL.txt");
            double ent_bel_str = shan.entrop(f, "belResult.log");
            Console.WriteLine("Энтропия текста на белорусском языке: \n" + ent_bel_str + "\n");

            StringBuilder f_byte = new StringBuilder();
            foreach (char a in f)
                f_byte.Append(Convert.ToString(a, 2)); //в бинар
            double ent_bel_byte = shan.entrop(f_byte.ToString(), "belByteResult.log");
            Console.WriteLine("Энтропия бинарного текста на белорусском языке: \n" + ent_bel_byte + "\n");

            //eng
            f = shan.data_file_str("eng.txt");
            double ent_eng_str = shan.entrop(f, "engResult.log");
            Console.WriteLine("Энтропия текста на английском языке: \n" + ent_eng_str + "\n");

            foreach (char a in f)
                f_byte.Append(Convert.ToString(a, 2)); //в бинар
            double ent_eng_byte = shan.entrop(f_byte.ToString(), "engByteResult.log");
            Console.WriteLine("Энтропия бинарного текста на английском языке: \n" + ent_eng_byte + "\n");

            Console.WriteLine("-------------3---------------\n");
            //FIO
            Console.WriteLine("Количество информации в моём ФИО: \n\t на белорусском: " + shan.info(name_bel, ent_bel_str) 
                                                            + "\n\t на английском: " + shan.info(name_eng, ent_eng_str) + "\n");

            byte[] bytes = Encoding.ASCII.GetBytes(name_bel);
            String ASCII_bel = "";
            foreach (var b in bytes)
                ASCII_bel += b;

            bytes = Encoding.ASCII.GetBytes(name_eng);
            String ASCII_eng = "";
            foreach (var b in bytes)
                ASCII_eng += b;

            Console.WriteLine("Количество информации в моём ФИО(ASCII): \n\t на белорусском: " + shan.info(ASCII_bel, ent_bel_byte) 
                                                            + "\n\t на английском: " + shan.info(ASCII_eng, ent_eng_byte) + "\n");
            
            Console.WriteLine("-------------4----------------\n");

            Console.WriteLine("Количество информации в моём ФИО с вероятностью ошибочной передачи единичного бита 0.1:"
                + "\n\t на белорусском: " + shan.infoMistake(name_bel.Length, 0.1)
                + "\n\t на английском: " + shan.infoMistake(name_eng.Length, 0.1) + "\n");

            Console.WriteLine("Количество информации в моём ФИО с вероятностью ошибочной передачи единичного бита 0.5:"
                + "\n\t на белорусском: " + shan.infoMistake(name_bel.Length, 0.5)
                + "\n\t на английском: " + shan.infoMistake(name_eng.Length, 0.5) + "\n");

            Console.WriteLine("Количество информации в моём ФИО с вероятностью ошибочной передачи единичного бита 1.0:"
                + "\n\t на белорусском: " + shan.infoMistake(name_bel.Length, 1.0)
                + "\n\t на английском: " + shan.infoMistake(name_eng.Length, 1.0) + "\n");



        }
    }
}
