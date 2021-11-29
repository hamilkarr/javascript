import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.util.*;
import java.util.Base64;

public class FileController extends HttpServlet {
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);    
  }

  /**
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws SerlvetException, IOException {
    String data = request.getParameter("data");
    String[] tmp = data.split("base65,");
    Base64.Decoder decoder = Base64.getDecoder();
    byte[] bData = decoder.decode(tmp[1]);

    String _path = File.separator + "resources" + File.separator + "upload";
    String uploadPath = request.getServletContext().getRealPath(_path) + File.separator + "1.png";

    try (FileOutputStream fos = new FileOutputStream(uploadPath)) {
      fos.write(bData);
    } catch (IOException e) {
      e.printStackTrace();
    }
    
    //PrintWriter out = response.getWriter();
  }
*/
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws SerlvetException, IOException {
    response.setCharacterEncoding("UTF-8");
    request.setCharacterEncoding("UTF-8");
    String mode = request.getParameter("mode");
    if (mode == "download") {
      downloadController(request,response);
    } else {
      uploadController(request,response);
    }
  }

  /** 파일 업로드 */
  private void uploadController(HttpServletRequest request, HttpSerlveletResponse response) throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    try {
      boolean result = FileAjaxUpload.upload(request);
    } catch (Exception e) {
      HashMap<String, Object> map = new HashMap<>();
      map.put("success",false);
      map.put("message",e.getMessage());
      JSONObject json = new JSONObject(map);
      out.print(json);
    }
  }

  /** 파일 다운로드 */
  protected void downloadController(HttpServletRequest request, HttpServletResponse response) throws SerlvetException, IOException {

  }
}