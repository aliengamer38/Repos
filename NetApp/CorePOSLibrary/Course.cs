using System;
using System.Collections.Generic;
using System.Globalization;

namespace CorePOSLibrary
{
    public class Course
    {
        public int Number { get; set; }
        public string Name { get; set; }
        public DateTime StartDate{ get; set; }
        public Course(int number, string name, DateTime startDate)
        {
            Number = number; Name = name; StartDate = startDate;
        }
    }

    public class CourseDbContext
    {
        public List<Course> Courses
        {
            get
            {
                Course course1 = new Course(1203, "Differential Geometry",
<<<<<<< HEAD
                    DateTime.ParseExact("2019-01-02", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course2 = new Course(2735, "Abstract Algebra",
                    DateTime.ParseExact("2019-02-23", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course3 = new Course(1752, "Advanced Statistics",
                    DateTime.ParseExact("2019-02-10", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course4 = new Course(1890, "Algebraic Geometry",
                    DateTime.ParseExact("2018-11-27", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course5 = new Course(2301, "Real Analysis",
                    DateTime.ParseExact("2018-11-10", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course6 = new Course(1349, "Complex Analysis",
                    DateTime.ParseExact("2019-03-13", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course7 = new Course(3640, "Functional Analysis",
                    DateTime.ParseExact("2019-03-20", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course8 = new Course(943, "Linear Algebra",
                    DateTime.ParseExact("2018-12-11", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course9 = new Course(4529, "Theory of Financial Mathematics",
                    DateTime.ParseExact("2019-05-02", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course10 = new Course(1907, "General Topology",
                    DateTime.ParseExact("2019-02-01", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course11 = new Course(3787, "Projective Geometry",
                    DateTime.ParseExact("2019-01-10", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course12 = new Course(5244, "Game Theory",
                    DateTime.ParseExact("2019-04-02", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course13 = new Course(876, "Field Theory",
                    DateTime.ParseExact("2019-06-01", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course14 = new Course(4184, "Discrete Mathematics",
                    DateTime.ParseExact("2019-03-18", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course15 = new Course(2579, "Algebraic Topology",
                    DateTime.ParseExact("2019-01-26", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course16 = new Course(1673, "Vector Analysis",
                    DateTime.ParseExact("2018-09-12", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course17 = new Course(4159, "Pre-Calculus",
                    DateTime.ParseExact("2019-01-27", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course18 = new Course(721, "Advanced Calculus",
                    DateTime.ParseExact("2019-04-10", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course19 = new Course(2784, "Fractal Geometry",
                    DateTime.ParseExact("2019-01-19", "yyyy-mm-dd", CultureInfo.InvariantCulture));
                Course course20 = new Course(1210, "Set Theory",
                    DateTime.ParseExact("2019-03-04", "yyyy-mm-dd", CultureInfo.InvariantCulture));
=======
                    DateTime.ParseExact("2019-01-02", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course2 = new Course(2735, "Abstract Algebra",
                    DateTime.ParseExact("2019-02-23", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course3 = new Course(1752, "Advanced Statistics",
                    DateTime.ParseExact("2019-02-10", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course4 = new Course(1890, "Algebraic Geometry",
                    DateTime.ParseExact("2018-11-27", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course5 = new Course(2301, "Real Analysis",
                    DateTime.ParseExact("2018-11-10", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course6 = new Course(1349, "Complex Analysis",
                    DateTime.ParseExact("2019-03-13", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course7 = new Course(3640, "Functional Analysis",
                    DateTime.ParseExact("2019-03-20", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course8 = new Course(943, "Linear Algebra",
                    DateTime.ParseExact("2018-12-11", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course9 = new Course(4529, "Theory of Financial Mathematics",
                    DateTime.ParseExact("2019-05-02", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course10 = new Course(1907, "General Topology",
                    DateTime.ParseExact("2019-02-01", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course11 = new Course(3787, "Projective Geometry",
                    DateTime.ParseExact("2019-01-10", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course12 = new Course(5244, "Game Theory",
                    DateTime.ParseExact("2019-04-02", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course13 = new Course(876, "Field Theory",
                    DateTime.ParseExact("2019-06-01", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course14 = new Course(4184, "Discrete Mathematics",
                    DateTime.ParseExact("2019-03-18", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course15 = new Course(2579, "Algebraic Topology",
                    DateTime.ParseExact("2019-01-26", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course16 = new Course(1673, "Vector Analysis",
                    DateTime.ParseExact("2018-09-12", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course17 = new Course(4159, "Pre-Calculus",
                    DateTime.ParseExact("2019-01-27", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course18 = new Course(721, "Advanced Calculus",
                    DateTime.ParseExact("2019-04-10", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course19 = new Course(2784, "Fractal Geometry",
                    DateTime.ParseExact("2019-01-19", "yyyy-MM-dd", CultureInfo.InvariantCulture));
                Course course20 = new Course(1210, "Set Theory",
                    DateTime.ParseExact("2019-03-04", "yyyy-MM-dd", CultureInfo.InvariantCulture));
>>>>>>> fbc1727d9ec7236f0dc8016ed7e5149fea278a79
                return new List<Course>() { course1, course2, course3, course4, course5, course6,
                                    course7, course8, course9, course10, course11, course12, course13,
                                    course14, course15, course16, course17, course18, course19, course20};
            }
        }
    }
}

