using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestUI
{
    public interface IUser
    {
        void DoWork();
    }
    public class Customer : IUser
    {
        public void DoWork()
        {
            Console.WriteLine("I am shopping");
        }
    }
    public class Student : IUser
    {
        public void DoWork()
        {
            Console.WriteLine("I am studying");
        }
    }
    public class Employee : IUser
    {
        public void DoWork()
        {
            Console.WriteLine("I am working");
        }
    }
    public static class Utility
    {
        public static IUser UserFactory(int i)
        {
            if (i == 10)
                return new Employee();
            else if (i == 20)
                return new Student();
            else
                return new Customer();
        }
    }
}
