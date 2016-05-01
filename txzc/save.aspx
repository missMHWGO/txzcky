if (Request["name"] != null) {  
    string name = Request["name"];   
    String savePath = Server.MapPath(".");    
    try {  
        FileStream fs = File.Create(savePath + "/" + name);    
        byte[] bytes = Convert.FromBase64String(Request["data"]);   
        fs.Write(bytes, 0, bytes.Length);  
        fs.Close(); 
    }  
    catch (Exception except) {  
    }
}  