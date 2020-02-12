using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace WPFUI.ViewModels
{
    public class RelayCommand : ICommand
    {
        Action<object> _execute;
        Predicate<object> _canExecute;
        public event EventHandler CanExecuteChanged;

        public bool CanExecute(object parameter)
        {
            return _canExecute?.Invoke(parameter) ?? false;
        }

        public void Execute(object parameter)
        {
            _execute?.Invoke(parameter);
        }

        public RelayCommand(Action<object> execute, Predicate<object> canExecute)
        {
            _execute = execute;
            _canExecute = canExecute;
        }
    }
}
