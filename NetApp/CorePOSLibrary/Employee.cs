using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorePOSLibrary
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public double Grades { get; set; }
        public bool IsCurrentlyEnrolled { get; set; }
        public List<Course> Courses { get; set; }
        public Employee(int id, string firstName, 
            string lastName, int age, double grades, 
            bool isCurrentlyEnrolled, List<Course> courses)
        {
            Id = id; FirstName = firstName; LastName = lastName; 
            Age = age; Grades = grades; IsCurrentlyEnrolled = isCurrentlyEnrolled;
            Courses = courses;
        }
    }
    public class EmployeeDbContext
    {
        public List<Employee> Employees
        {
            get
            {
                CourseDbContext courseDbContext = new CourseDbContext();
                List<Course> courses = courseDbContext.Courses;
                List<Course> course1 = new List<Course>() { courses[7], courses[2], courses[4], courses[0], courses[11] };
                List<Course> course2 = new List<Course>() { courses[1], courses[3], courses[6], courses[4] };
                List<Course> course3 = new List<Course>() { courses[2], courses[3], courses[7], courses[0], courses[12], courses[10] };
                List<Course> course4 = new List<Course>() { courses[0], courses[1], courses[2]};
                List<Course> course5 = new List<Course>() { courses[8], courses[5], courses[13], courses[16], courses[0] };
                List<Course> course6 = new List<Course>() { courses[3], courses[6], courses[2], courses[15], courses[17], courses[13], courses[0], courses[10] };
                List<Course> course7 = new List<Course>() { courses[0], courses[15], courses[1], courses[4], courses[8], courses[9], courses[18] };
                List<Course> course8 = new List<Course>() { courses[0], courses[2], courses[19], courses[12] };
                List<Course> course9 = new List<Course>() { courses[14], courses[5], courses[19], courses[1], courses[9], courses[0] };
                List<Course> course10 = new List<Course>() { courses[7], courses[13], courses[5], courses[4], courses[11] };

                Employee emp1 = new Employee(101, "John", "Doe",
                    20, 2.25, false, course1);
                Employee emp2 = new Employee(210, "Mark", "Smith",
                    25, 2.12, true, course2);
                Employee emp3 = new Employee(193, "Pam", "Stone",
                    31, 1.25, false, course3);
                Employee emp4 = new Employee(305, "Maggie", "Yatzee",
                    19, 1.50, true, course4);
                Employee emp5 = new Employee(73, "Steph", "Curry",
                    27, 2.30, false, course5);
                Employee emp6 = new Employee(62, "Kobe", "Bryant",
                    33, 3.11, true, course6);
                Employee emp7 = new Employee(425, "James", "Howard",
                    26, 1.45, false, course7);
                Employee emp8 = new Employee(156, "Mary", "Brooks",
                    19, 2.01, true, course8);
                Employee emp9 = new Employee(373, "Ram", "Jones",
                    30, 2.47, true, course9);
                Employee emp10 = new Employee(204, "Sam", "Smith",
                    22, 1.12, false, course10);
                return new List<Employee>() { emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8, emp9, emp10 };
            }
        }
    }

    
}
