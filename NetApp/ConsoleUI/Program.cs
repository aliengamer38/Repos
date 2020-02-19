using CorePOSLibrary;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media.Imaging;
using System.Xml;
using System.Xml.Schema;
using System.Xml.Serialization;

namespace ConsoleUI
{
    class Program
    {
        static string desktop = @"C:\Users\Angelo Sevilleno\Desktop";
        EmployeeDbContext _db = new EmployeeDbContext();
        static void Main(string[] args)
        {
            string path = $@"{desktop}\Test\text.txt";
            BinaryWriter bw = new BinaryWriter(File.Open(path, FileMode.Open));
            Choices choice = Choices.Medium | Choices.Large; //01 | 11 = 11
            Console.WriteLine(choice);           

        }

        static void Helper()
        {            
        }
        
    }
    [Flags]
    public enum Choices
    {
        Small = 1,
        Medium = 2,
        Large = 3
    }
    [XmlRootAttribute("User", IsNullable = false)]
    public class User
    {
        [XmlAttribute]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public double Grades { get; set; }
    }
    [XmlRootAttribute("Book", IsNullable = false)]
    public class Book
    {
        [XmlAttribute]
        public string Genre { get; set; }
        [XmlAttribute]
        public string ISBN { get; set; }
        [XmlAttribute]
        public DateTime PublicationDate { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
    }
    public class DbContext
    {
        public static List<Book> Books
        {
            get
            {
                return new List<Book>()
                {
                    new Book()
                    {
                        Genre = "Novel",
                        ISBN = "1-861001-57-8",
                        PublicationDate = DateTime.ParseExact("1823-01-28", "yyyy-MM-dd", CultureInfo.InvariantCulture),
                        Title = "Pride and Prejudice",
                        Price = 24.95
                    },
                    new Book()
                    {
                        Genre = "Novel",
                        ISBN = "1-861002-30-1",
                        PublicationDate = DateTime.ParseExact("1985-01-01", "yyyy-MM-dd", CultureInfo.InvariantCulture),
                        Title = "The Handmaid's Tale",
                        Price = 29.95
                    },
                    new Book()
                    {
                        Genre = "Novel",
                        ISBN = "1-861001-45-3",
                        PublicationDate = DateTime.ParseExact("1911-01-01", "yyyy-MM-dd", CultureInfo.InvariantCulture),
                        Title = "Sense and Sensibility",
                        Price = 19.95
                    }
                };
            }
        }
    }
}
