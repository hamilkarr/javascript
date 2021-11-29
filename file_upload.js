/**
 * 자바스크립트 파일 업로드 기능 구현
 *
 * @date 2021-11-29
 * @email yonggyo00@kakao.com
 */

const fileUpload = {
  /** 파일 업로드
   * @param file = File 인스턴스
   */
  process: function (file) {
    const gidEl = document.getElementsByName('gid')[0];
    let gid = 0;
    if (gidEl) {
      gid = gidEl.value;
    }

    const reader = new FileReader();

    reader.addEventListener('load', function () {
      const base64 = reader.result;
      const uploadedImages = document.getElementById('uploaded_images');
      if (uploadedImages) {
        const img = document.createElement('img');
        img.src = base64;
        img.width = 50;
        uploadedImages.appendChild(img);
      }

      /** 서버로 전송 */
      const xhr = new XMLHttpRequest();
      url = '/shop/file';
      let params = 'mode=upload&data=' + encodeURIComponent(base64);
      params += '&fileName=' + encodeURIComponent(file.name);
      params += '&fileType' + encodeURIComponent(file.type);
      params += '&gid=' + gid;

      xhr.open('POST', url);

      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      xhr.send(params);
      xhr.addEventListener('readystatechange', function () {
        /**
         * xhr.readyState - 0 - 기본 상태
         * xhr.readyState - 1 - open 메서드 호출
         * xhr.readyState - 2 - send 메서드 호출
         * xhr.readyState - 3 - 응답이 loading 될때 호출
         * xhr.readyState - 4 - 응답이 완료 되었을때
         * xhr.status - 200번일때 정상 응답.
         */
        if (xhr.readyState == 4 && xhr.status == 200) {
          // 정상 응답
          console.log(xhr); //response, responseText
        }
      });
    });

    reader.addEventListener('error', function (e) {
      console.error(e);
    });

    reader.readAsDataURL(file);
  },
};

window.addEventListener('DOMContentLoaded', function () {
  const fileEl = document.querySelector('.file_upload');
  if (fileEl) {
    fileEl.addEventListener('change', function (e) {
      // e.target, e.currentTarget
      const file = e.target.files[0];
      // console.log(file);
      fileUpload.process(file);
    });
  }
});
