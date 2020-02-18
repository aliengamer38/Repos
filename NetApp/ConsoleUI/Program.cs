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
        public List<Employee> Employees { get; set; } = new EmployeeDbContext().Employees;

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
    public class EmployeeEqualityComparer : IEqualityComparer<Employee>
    {
        public bool Equals(Employee x, Employee y)
        {
            string xName = $"{x.FirstName} {y.LastName}";
            string yName = $"{x.FirstName} {y.LastName}";
            return xName.Equals(yName);
        }

        public int GetHashCode(Employee emp)
        {
            return $"{emp.FirstName} {emp.LastName}".GetHashCode();
        }
    }

    public class EmpBoolComparer : IEqualityComparer<Employee>
    {
        public bool Equals(Employee x, Employee y)
        {
            return x.IsCurrentlyEnrolled == y.IsCurrentlyEnrolled;
        }

        public int GetHashCode(Employee emp)
        {
            return $"{emp.FirstName} {emp.LastName}".GetHashCode();
        }
    }
}
