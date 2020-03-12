 <%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApp.WebForm1" %>

<!DOCTYPE html>

 <html>
<head>
    <title>Index Page</title>    
    <script src="Scripts/jquery-3.4.1.min.js"></script>
    <script src="Scripts/jquery-ui.min.js"></script>
    <link href="Scripts/jquery-ui.min.css" rel="stylesheet" />
    <script type="text/javascript">
        $(document).ready(function () {
            $("#menu").menu();
        })
    </script>
</head>
<body style="font-family:Arial">
    <ul id="menu">
    <li>USA
        <ul>
            <li>Virginia</li>
            <li>Maryland</li>
        </ul>
    </li>
    <li>India
        <ul>
            <li>AP</li>
            <li class="ui-state-disabled">MP</li>
            <li>Karnataka
            <ul>
                <li>Bangalore</li>
                <li>Mangalore</li>
                <li>Mysore</li>
            </ul>
            </li>
        </ul>
    </li>
    <li>UK</li>
    <li>Australia</li>
</ul>
</ul>
</body>
</html>
