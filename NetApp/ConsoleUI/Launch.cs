using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleUI
{
    public class Launch
    {
        public string Description { get; set; }
        //static void Main(string[] args)
        //{
        //    #region Comment
        //    //Launch l = new Launch() { Description = "One" };
        //    //Launch Helper2(ref Launch n)
        //    //{
        //    //    n = new Launch() { Description = "Two" };
        //    //    return n;
        //    //}
        //    //Launch launch = Helper2(ref l);
        //    //Console.WriteLine(ReferenceEquals(launch, l));

        //    //User user = new User() { Description = "Developer" };      
        //    //User Helper(ref User u)
        //    //{
        //    //    u = new User() { Description = "Programmer" };

        //    //    return u;
        //    //}
        //    //User us = Helper(ref user);
        //    ////Console.WriteLine(ReferenceEquals(user, Helper(ref user)));
        //    ////Console.WriteLine(ReferenceEquals(user, us));
        //    //Helper(ref user).Description = "Modified";
        //    //Console.WriteLine(user.Description);
        //    #endregion

        //    Launch l = new Launch() { Description = "Developer" };
        //    Launch nl = Work(ref l);
        //    //Work(ref l).Description = "DevOPS";
        //    Console.WriteLine(l.Description);


        //}

        static User Helper1(User user)
        {
            return user;
        }

        static Launch Helper(ref Launch n)
        {           
            n = new Launch();
            return n;     
        }

        static Launch Work(ref Launch l)
        {
            l = new Launch { Description = "Programmer" };
            return l;
        }
    }

    public class User
    {
        public string Description { get; set; }
    }
}
