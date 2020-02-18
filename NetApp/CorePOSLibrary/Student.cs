using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorePOSLibrary
{
    public class Student
    {
        public string Name { get; set; }
        public double Grades { get; set; }
        public string Description { get; set; }
        public Student()
        {
            Description = "Orange";
        }
    }
}
