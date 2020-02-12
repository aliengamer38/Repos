using System;
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
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WPFUI
{
    /// <summary>
    /// Interaction logic for Launch.xaml
    /// </summary>
    public partial class Launch : Window
    {        
        private void btnSpinner_MouseEnter(object sender, MouseEventArgs e)
        {
            //var dblAnim = new DoubleAnimation();

            //dblAnim.From = 0;
            //dblAnim.To = 360;

            //var rt = new RotateTransform();
            //btnSpinner.RenderTransform = rt;

            //rt.BeginAnimation(RotateTransform.AngleProperty, dblAnim);
        }
        private void btnSpinner_OnClick(object sender, RoutedEventArgs e)
        {
            //var dblAnim = new DoubleAnimation
            //{
            //    From = 1.0,
            //    To = 0.0
            //};
            //btnSpinner.BeginAnimation(Button.OpacityProperty, dblAnim);
            //var dblAnime = new DoubleAnimation()
            //{
            //    To = 50,
            //    From = 20,
            //    Duration = new Duration(TimeSpan.FromSeconds(2))
            //};
            //dblAnime.AutoReverse = true;

            //txtTimer.BeginAnimation(TextBox.FontSizeProperty, dblAnime);
            
        }


        public Launch()
        {
            InitializeComponent();
        }

        private void txtTimer_Loaded(object sender, RoutedEventArgs e)
        {
            var txtTimer = (TextBox)sender;
            txtTimer.BeginAnimation(TextBox.FontSizeProperty, new DoubleAnimation()
            {
                From = 20,
                To = 50,
                Duration = new Duration(TimeSpan.FromSeconds(2)),
                AutoReverse = true
            });   
            
        }
    }
}
