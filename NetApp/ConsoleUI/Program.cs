using CorePOSLibrary;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media.Imaging;
using UI = ConsoleUI;


namespace ConsoleUI
{
    public class Execution
    {  
        public Execution()
        {
            Console.WriteLine("Execution constructor");
        }
    }

    public class Engine
    {
        Lazy<Execution> _exec;
        public Engine()
        {
            _exec = new Lazy<Execution>(() =>
            {
                Console.WriteLine("Default constructor is fired");
                return new Execution();
            });
        }
        public Execution Helper()
        {
            return _exec.Value;
        }
    }
    public class Program
    {


    }


    public class EmployeeComparer : IComparer
    {
        public int Compare(object x, object y)
        {
            throw new NotImplementedException();
        }
    }
}
   
