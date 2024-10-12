using System.Net.Mail;

namespace vorganizer_backend.Model;

public class User
{
    public string  Username { get; set; }
    
    public string Password { get; set; }
    
    public string Mailaddress { get; set; }      
}