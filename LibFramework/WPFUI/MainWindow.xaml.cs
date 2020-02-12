﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WPFUI
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Window_MouseMove(object sender, MouseEventArgs e)
        {
            txt.Text = e.GetPosition(this).ToString();
        }

        private void btn_Click(object sender, RoutedEventArgs e)
        {
            

        }   

        private void Grid_MouseMove(object sender, MouseEventArgs e)
        {
            txtName.Text = Mouse.GetPosition(this).ToString();
        }
    }
}