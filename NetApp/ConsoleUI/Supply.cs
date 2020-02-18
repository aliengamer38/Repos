using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;


namespace ConsoleUI
{ 
    [Serializable]
    public class Supply
    {       

        public ref Computer ChangeNumber(ref Computer comp, Computer c)
        {
            comp = new Computer() { SerialNumber = 1000 };
            return ref comp;
        }

        static ref int Helper(int[] arr, int i)
        {
            return ref arr[i];
        }
        void Work()
        {
            Console.WriteLine("WORK");
        }
    }

    public class Computer
    {
        public int SerialNumber { get; set; }
        public string Brand { get; set; }
    }
}
