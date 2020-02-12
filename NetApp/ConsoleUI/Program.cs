using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media.Imaging;

namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {            
            string s = "";
            void Change()
            {
                s = "Changed";
            }
            Change();
            Console.WriteLine(s);

        }
        
    }
}
