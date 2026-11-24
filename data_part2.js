// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: CHUYÊN ĐỀ II – MÔ LIÊN KẾT & MÔ CHUYÊN BIỆT (BÀI 4–8)
// Chuẩn Giáo trình Mô học (PGS.TS. Trần Công Toại, NXB ĐHQG TP.HCM 2020/2021) – tr. 33–64
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 4: ĐẠI CƯƠNG MÔ LIÊN KẾT & 9 LOẠI TẾ BÀO MÔ LIÊN KẾT
  // ========================================================================
  {
    id: 4,
    group: "II. MÔ LIÊN KẾT & MÔ CHUYÊN BIỆT",
    title: "Bài 4: Đại cương Mô Liên kết & 9 Loại Tế bào Liên kết",
    shortTitle: "Đại cương & 9 Tế bào Liên kết",
    textbookRef: "Mô học Trần Công Toại – Bài Mô liên kết (tr. 33–38, 44–45)",
    summary: "Định nghĩa 3 thành phần mô liên kết và phân biệt toàn diện với biểu mô; phân tích nguồn gốc, hình thái và chức năng 9 loại tế bào mô liên kết (trung mô, nguyên bào sợi, đại thực bào, tương bào, masto bào, chu bào, nội mô, sắc tố, mỡ).",
    simId: "sim_ct_cells",
    simTitle: "Kính Hiển vi Phân biệt 9 Loại Tế bào Mô Liên kết & Cơ chế Miễn dịch – Dị ứng",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Định nghĩa &amp; Đặc điểm Chung Mô Liên kết (tr. 33) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_1')">🖼️ Xem Hình 3.1</button></div>
          <ul class="theory-list">
            <li><strong>Tỷ lệ &amp; Vai trò:</strong> Trong 5 loại mô cơ bản, mô liên kết <strong>chiếm tỷ lệ cao nhất</strong>, có khắp mọi nơi, nằm chen giữa giúp các mô khác gắn kết thành cơ thể thống nhất; tạo – giữ hình dạng cơ thể; giữ vai trò <strong>trao đổi chất, bảo vệ, tổng hợp các chất có hoạt tính sinh học</strong>.</li>
            <li><strong>Mạch máu:</strong> Mô liên kết là <strong>mô DUY NHẤT có chứa mạch máu</strong> để nuôi bản thân và các mô khác (biểu mô, mô sụn không có mạch máu).</li>
            <li><strong>Nguồn gốc phôi:</strong> Từ <strong>trung bì phôi</strong>, trừ một số ở vùng đầu có thể bắt nguồn từ <strong>ngoại bì mào thần kinh</strong>.</li>
            <li><strong>Định nghĩa 3 thành phần:</strong> Mô liên kết gồm <strong>tế bào liên kết</strong>, <strong>sợi liên kết</strong> và <strong>chất căn bản</strong>. Hai thành phần sau (sợi + chất căn bản) kết hợp tạo thành <strong>chất nền ngoại bào</strong>.</li>
            <li><strong>Phân 2 nhóm lớn:</strong>
              <ul>
                <li><strong>Mô liên kết chính thức:</strong> Nâng đỡ, nối kết các mô (nhầy, thưa, đặc, chun).</li>
                <li><strong>Mô liên kết chuyên biệt:</strong> Cấu trúc &amp; chức năng rất đặc biệt gồm <strong>mô lưới, mô mỡ, mô sụn và mô xương</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">⚖️ 2. Phân biệt Biểu mô với Mô Liên kết (Đề cương Yêu cầu!)</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tiêu chí So sánh</th>
                  <th>Biểu mô</th>
                  <th>Mô liên kết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sắp xếp tế bào &amp; Chất gian bào</strong></td>
                  <td>Tế bào <strong>liên kết chặt chẽ</strong>; rất ít hoặc không có cấu trúc gian bào.</td>
                  <td>Tế bào <strong>nằm riêng rẽ</strong>; xen giữa là sợi liên kết và chất căn bản phong phú.</td>
                </tr>
                <tr>
                  <td><strong>Mạch máu</strong></td>
                  <td><strong>Không có mạch máu</strong> (nuôi qua màng đáy từ mô đệm).</td>
                  <td><strong>Mô duy nhất chứa mạch máu</strong> nuôi mình và các mô khác (trừ sụn).</td>
                </tr>
                <tr>
                  <td><strong>Tính phân cực</strong></td>
                  <td>Rõ rệt (cực ngọn tiếp xúc khoang/môi trường ngoài, cực đáy tựa màng đáy).</td>
                  <td><strong>Không có tính phân cực</strong> và không tiếp xúc trực tiếp môi trường ngoài.</td>
                </tr>
                <tr>
                  <td><strong>Nguồn gốc phôi</strong></td>
                  <td>Cả 3 lá phôi: ngoại bì, nội bì, trung bì.</td>
                  <td>Chủ yếu <strong>trung bì phôi</strong> (trừ vùng đầu từ ngoại bì mào thần kinh).</td>
                </tr>
                <tr>
                  <td><strong>Vị trí đặc trưng</strong></td>
                  <td>Che phủ bề mặt, lót khoang, tạo các tuyến.</td>
                  <td>Chen giữa nâng đỡ các mô khác trong toàn cơ thể.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Câu tự lượng giá 1 &amp; 4 (tr. 44–45)</div>
            <ul>
              <li><strong>Câu 1 (Đáp án B):</strong> Mô liên kết giàu acid hyaluronic, không tiếp xúc môi trường ngoài, chứa nhiều mạch máu, chất gian bào phong phú — điểm SAI là <em>"Có tính phân cực rõ rệt"</em>!</li>
              <li><strong>Câu 4 (Đáp án B):</strong> Mô liên kết tổng hợp chất có hoạt tính sinh học nhưng <strong>KHÔNG</strong> giữ vai trò tổng hợp hormon (đó là chức năng của biểu mô tuyến nội tiết)!</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔬 3. Phân tích Chi tiết 9 Loại Tế bào Mô Liên kết (tr. 34–38, 44) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_20')">🖼️ Xem Mindmap Hình 3.20</button></div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Nhóm &amp; Tên Tế bào</th>
                <th>Hình thái &amp; Siêu cấu trúc Nhận diện</th>
                <th>Nguồn gốc, Phân bố &amp; Chức năng Chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>a. Tế bào trung mô</strong><br/><span class="stain-badge">TB cố định</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_2')">🖼️ H.3.2</button></td>
                <td>Nhỏ, hình thon dài hoặc hình sao; nhân bầu dục nằm giữa; tỷ lệ nhân/bào tương &gt; 1; bào tương ít tỏa nhánh nối thành một lưới trung mô.</td>
                <td>Rất nhiều ở phôi thai; ở người trưởng thành vẫn tồn tại giữ nguyên khả năng biệt hóa thành nguyên bào sợi và các TB liên kết khác → <strong>tế bào gốc đa năng</strong> (<em>Đáp án Câu 5 tr.45</em>).</td>
              </tr>
              <tr>
                <td><strong>b. Nguyên bào sợi – Tế bào sợi</strong><br/><span class="stain-badge">TB cố định</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_3')">🖼️ H.3.3</button></td>
                <td>Thường gặp nhất. <strong>Nguyên bào sợi:</strong> hình thoi, nhân kéo dài dọc trục, bào tương ít ái kiềm nhẹ, ranh giới không rõ, nổi bật rất nhiều <strong>lưới nội bào hạt</strong>. <strong>Tế bào sợi:</strong> nguyên bào sợi trưởng thành.</td>
                <td>Biệt hóa từ TB trung mô. Có <strong>2 chức năng trái ngược:</strong> (1) Tổng hợp &amp; chế tiết sợi + chất căn bản; (2) Sản xuất enzym phân hủy protein chất nền ngoại bào rồi tái hấp thu cặn bã → đổi mới liên tục chất nền. Tế bào sợi nhiều ở gân, cơ, màng bao xơ, là <strong>cơ sở cấu tạo vết sẹo</strong>.</td>
              </tr>
              <tr>
                <td><strong>c. Đại thực bào</strong><br/><span class="stain-badge">Từ TB máu (Mono)</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_4')">🖼️ H.3.4</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_5')">🖼️ H.3.5</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_6')">🖼️ H.3.6</button></td>
                <td>Kích thước khá lớn, đường viền không đều (lõm thực bào), bào tương không đồng nhất do chứa nhiều túi thực bào và thể vùi khác nhau.</td>
                <td>
                  • <strong>Đại thực bào tại chỗ:</strong> Dọn TB già/vụn chết; gan (<strong>tế bào Kupffer</strong> dọc mao mạch nan hoa), lách (tiêu hồng cầu già chứa sắc tố <strong>hemosiderin</strong>), phổi (<strong>tế bào bụi</strong> ở phế nang).<br/>
                  • <strong>Đại thực bào viêm:</strong> Từ mono bào xuyên mạch + tại chỗ kéo đến ổ viêm dọn sạch.<br/>
                  • <strong>TB phụ trợ miễn dịch:</strong> Thực bào, biến đổi và <strong>trình diện kháng nguyên</strong> cho <strong>lympho bào T hỗ trợ</strong>.
                </td>
              </tr>
              <tr>
                <td><strong>d. Tương bào</strong><br/><span class="stain-badge">Từ TB máu (Lympho B)</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_7')">🖼️ H.3.7</button></td>
                <td><strong>Nhân tròn nằm lệch một bên</strong>, chất nhiễm sắc cô đặc thành từng khối bám vào màng nhân; bào tương rất <strong>ái kiềm</strong> do <strong>LNBH phát triển mạnh</strong>; <strong>hệ Golgi</strong> rất phát triển nằm sáng cạnh nhân.</td>
                <td>Tế bào thực hiện <strong>miễn dịch dịch thể</strong>: tổng hợp và tích trữ các <strong>globulin miễn dịch (kháng thể)</strong>.</td>
              </tr>
              <tr>
                <td><strong>e. Masto bào (Mast cell)</strong><br/><span class="stain-badge">Từ tủy xương</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_8')">🖼️ H.3.8</button></td>
                <td>Đường kính <strong>&gt; 20 µm</strong>, nhân tròn, bào tương chứa nhiều <strong>hạt ái kiềm lớn</strong> (tương tự BC đa nhân ái kiềm); tập trung quanh mạch máu.</td>
                <td>Nguồn gốc từ TB gốc tủy xương → máu → mô LK. Hạt chứa <strong>histamin</strong> (giãn mạch, tăng tính thấm, co cơ trơn), <strong>protease, ECF-A</strong> (hóa ứng động BC ái toan), <strong>heparin</strong>. Có thụ thể bề mặt với <strong>IgE</strong> → kích hoạt <strong>phản ứng dị ứng</strong> khi tiếp xúc kháng nguyên lần 2.</td>
              </tr>
              <tr>
                <td><strong>f. Chu bào</strong><br/><span class="stain-badge">TB cố định</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_9')">🖼️ H.3.9</button></td>
                <td>Tế bào trung mô nằm sát quanh mao mạch; ngăn cách với tế bào nội mô qua <strong>1 màng đáy</strong>; bề mặt có tận cùng thần kinh.</td>
                <td>Có chức năng <strong>điều chỉnh lòng (kích thước) mao mạch</strong>.</td>
              </tr>
              <tr>
                <td><strong>g. Tế bào nội mô</strong><br/><span class="stain-badge">TB cố định</span></td>
                <td>Khá lớn (<strong>75–150 µm</strong>) nhưng rất mỏng; liên kết chặt nhau (có tác giả xếp vào biểu mô lát đơn); bào tương nhiều không bào, ẩm bào.</td>
                <td>Lót mặt trong mạch máu; tạo <strong>hàng rào sinh học</strong> bảo vệ và đảm bảo <strong>trao đổi chất – khí</strong> giữa máu và mô.</td>
              </tr>
              <tr>
                <td><strong>h. Tế bào sắc tố</strong><br/><span class="stain-badge">Liên hệ bài Da</span></td>
                <td>Thân nằm ở lớp sinh sản, nhánh bào tương vươn lên lớp gai (ở da); phát hiện bằng <strong>nhuộm bạc</strong>; bào tương nhiều thể melanin.</td>
                <td>Nguồn gốc <strong>mào thần kinh</strong>; chức năng tổng hợp sắc tố <strong>melanin</strong>.</td>
              </tr>
              <tr>
                <td><strong>i. Tế bào mỡ</strong><br/><span class="stain-badge">Chuyên biệt</span> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_19')">🖼️ H.3.19</button></td>
                <td>Kích thước lớn, bào tương gần như bị choán hết bởi một giọt lipid lớn (mỡ trắng) làm nhân bị ép dẹt nằm sát màng một phía.</td>
                <td>Tổng hợp và dự trữ lipid làm <strong>nguồn dự trữ năng lượng</strong>, cách nhiệt, bảo vệ cơ học.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout pearl">
          <div class="callout-title">🔎 Giải mã Câu Tự lượng giá 6 (tr. 45): Hệ thống Thực bào</div>
          <p>Các tế bào thuộc hệ thống thực bào đơn nhân gồm: <strong>vi bào đệm</strong> (thần kinh), <strong>tế bào Kupffer</strong> (gan), <strong>mono bào</strong> (máu), <strong>tế bào bụi</strong> (phổi), <strong>đại thực bào lách</strong>, <strong>hủy cốt bào</strong> và <strong>tế bào phụ trợ miễn dịch</strong>. <strong>Tế bào Leydig</strong> là tế bào tuyến nội tiết ở tinh hoàn tiết testosteron nên <strong>KHÔNG</strong> thuộc hệ thống thực bào (Đáp án C).</p>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Mô liên kết có các đặc điểm sau, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô liên kết, Câu tự lượng giá 1 (tr. 44)",
        options: [
          "Có tính phân cực rõ rệt",
          "Giàu acid hyaluronic",
          "Không tiếp xúc môi trường ngoài",
          "Chứa nhiều mạch máu",
          "Chất gian bào phong phú"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 45): 1.B – Có tính phân cực rõ rệt là đặc điểm của BIỂU MÔ, không phải mô liên kết. Mô liên kết giàu acid hyaluronic, không tiếp xúc trực tiếp môi trường ngoài, là mô duy nhất chứa mạch máu và giàu chất gian bào."
      },
      {
        q: "Mô liên kết có các đặc điểm sau, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô liên kết, Câu tự lượng giá 4 (tr. 45)",
        options: [
          "Giữ vai trò tổng hợp hormon",
          "Giữ vai trò trao đổi chất và bảo vệ cơ thể",
          "Được phân thành hai nhóm: mô liên kết chính thức và chuyên biệt",
          "Là mô duy nhất có chứa mạch máu để nuôi bản thân và các mô khác",
          "Hầu hết có nguồn gốc từ trung bì phôi"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 45): 4.B – Tổng hợp hormon là vai trò của biểu mô tuyến nội tiết; mô liên kết tổng hợp các chất có hoạt tính sinh học (histamin, heparin, kháng thể, collagen...), không phải hormon."
      },
      {
        q: "Tế bào nào của mô liên kết còn được gọi là 'tế bào đa năng' (tế bào gốc ở người trưởng thành)?",
        source: "Mô học Trần Công Toại – Chương Mô liên kết, Câu tự lượng giá 5 (tr. 45)",
        options: [
          "Tế bào trung mô",
          "Tế bào sợi",
          "Nguyên bào sợi",
          "Đại thực bào",
          "Tương bào"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 45): 5.E – Tế bào trung mô. Ở phôi thai và một số vùng ở người trưởng thành, tế bào trung mô giữ khả năng biệt hóa thành nguyên bào sợi hoặc nhiều loại tế bào liên kết khác."
      },
      {
        q: "Các tế bào sau thuộc hệ thống thực bào, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô liên kết, Câu tự lượng giá 6 (tr. 45)",
        options: [
          "Tế bào Leydig",
          "Vi bào đệm",
          "Tế bào Kupffer",
          "Mono bào",
          "Tế bào phụ trợ miễn dịch"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 45): 6.C – Tế bào Leydig (nằm ở mô kẽ tinh hoàn, thuộc nhóm tế bào nội tiết tiết testosteron) KHÔNG thuộc hệ thống thực bào."
      },
      {
        q: "Cơ chế gây phản ứng dị ứng của Masto bào (tế bào mast) diễn ra qua bước gắn kháng thể nào khi tiếp xúc kháng nguyên lần thứ nhất và lần thứ hai?",
        source: "Mô học Trần Công Toại – Mục II.1.e & Hình 3.8 (tr. 37–38)",
        options: [
          "Lần 1 lympho tạo IgE gắn lên thụ thể bề mặt masto bào; lần 2 kháng nguyên gắn lên IgE gây phóng thích histamin, protease, ECF-A và heparin",
          "Lần 1 đại thực bào tiết IgG; lần 2 nguyên bào sợi co rút phá vỡ mạch máu",
          "Lần 1 tương bào tiết IgM hoạt hóa hủy cốt bào; lần 2 chu bào giải phóng hemosiderin",
          "Lần 1 tế bào trung mô tạo serotonin; lần 2 tế bào bụi tiết surfactant"
        ],
        answer: 0,
        explain: "Trang 37–38: Hạt ái kiềm của masto bào chứa histamin, protease, ECF-A, heparin và bề mặt mang thụ thể IgE. Lần 1 lympho sản xuất IgE gắn lên thụ thể; lần 2 kháng nguyên gắn vào IgE đã có sẵn kích hoạt phóng thích hạt gây triệu chứng dị ứng."
      },
      {
        q: "Hai chức năng trái ngược nhau cùng do Nguyên bào sợi đảm nhiệm để đảm bảo đổi mới liên tục chất nền ngoại bào là gì?",
        source: "Mô học Trần Công Toại – Mục II.1.b (tr. 34)",
        options: [
          "Tổng hợp – chế tiết sợi & chất căn bản VÀ sản xuất enzym phân hủy protein chất nền ngoại bào rồi tái hấp thu cặn bã",
          "Vận chuyển oxy VÀ thực bào hồng cầu già tạo sắc tố hemosiderin",
          "Tổng hợp globulin miễn dịch IgE VÀ tiết histamin gây giãn mạch",
          "Tạo hàng rào nội mô VÀ tạo lá xương nhiễm canxi"
        ],
        answer: 0,
        explain: "Trang 34: Nguyên bào sợi vừa tổng hợp chế tiết sợi và chất căn bản, vừa sản xuất enzym phân hủy protein chất nền ngoại bào rồi tái hấp thu chất cặn bã sau phân hủy, nhờ đó đổi mới liên tục chất nền ngoại bào."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: SỢI LIÊN KẾT, CHẤT CĂN BẢN & PHÂN LOẠI MÔ LIÊN KẾT CHÍNH THỨC
  // ========================================================================
  {
    id: 5,
    group: "II. MÔ LIÊN KẾT & MÔ CHUYÊN BIỆT",
    title: "Bài 5: Sợi Liên kết, Chất Căn bản & Mô Liên kết Chính thức",
    shortTitle: "Sợi, Chất căn bản & MLK Chính thức",
    textbookRef: "Mô học Trần Công Toại – Mục II.2–4 (tr. 38–42, 45)",
    summary: "Cấu trúc phân tử – siêu vi (vân 64 nm, tropocollagen), quá trình tổng hợp và 4 týp collagen; sợi chun (elastin + vi sợi 10 nm, nhuộm aldehyde fuchsin); chất căn bản (proteoglycan, GAG, acid hyaluronic, fibronectin -S-S-); và 4 loại mô liên kết chính thức.",
    simId: "sim_fibers_matrix",
    simTitle: "Phòng Lab Sinh tổng hợp Collagen, Nhuộm Sợi (I–IV & Chun) & Chất Căn bản",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧵 1. Sợi Collagen: Cấu trúc Siêu vi &amp; Sinh tổng hợp (tr. 38–39)</div>
          <ul class="theory-list">
            <li><strong>Đặc điểm chung:</strong> Chiếm số lượng nhiều nhất, kết thành bó lớn xen kẽ tế bào. Gồm nhiều vi sợi xếp song song, có dạng vân do <strong>băng tối và băng sáng luân phiên chu kỳ 64 nm</strong> (khoảng trống 30 nm) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_10')">🖼️ Xem Hình 3.10</button>.</li>
            <li><strong>Đơn vị Tropocollagen:</strong> Đường kính <strong>1,5 nm</strong>, dài <strong>280 nm</strong>; tạo bởi <strong>3 chuỗi alpha xoắn quanh nhau</strong> (1 chuỗi α riêng lẻ dày ~1 nm, bộ 3 xoắn ~3 nm; mỗi chuỗi α là polypeptide xoắn gồm khoảng <strong>1.000 acid amin</strong>) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_11')">🖼️ Xem Hình 3.11</button>.</li>
            <li><strong>Chuỗi sinh tổng hợp 2 giai đoạn (Nội bào → Ngoại bào):</strong>
              <ol>
                <li><strong>Lưới nội bào hạt (ribosom):</strong> Tổng hợp riêng rẽ <em>chuỗi tiền alpha</em> (có gắn thêm đoạn peptide ngắn không xoắn ở hai đầu phân tử).</li>
                <li><strong>Bộ Golgi:</strong> Chuyển sang Golgi để biến đổi hóa học và ghép 3 chuỗi tiền alpha tạo <strong>phân tử procollagen</strong> (chưa kết tụ bên trong tế bào vì bị ức chế bởi 2 đoạn peptide ngắn).</li>
                <li><strong>Túi chế tiết:</strong> Đóng gói vận chuyển procollagen xuất bào ra <strong>khoảng gian bào</strong>.</li>
                <li><strong>Khoảng gian bào (Ngoại bào):</strong> Cắt bỏ 2 đoạn peptide ngắn ở đầu → biến thành <strong>tropocollagen</strong>, các tropocollagen tự xếp lệch nhau lắp ráp thành <strong>vi sợi collagen</strong>.</li>
              </ol>
            </li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Câu tự lượng giá 3 (tr. 45)</div>
            <p>Sự tổng hợp và hình thành sợi collagen liên quan đến Lưới nội bào hạt, Bộ Golgi, Nang vận chuyển, Khoảng gian bào — <strong>KHÔNG</strong> liên quan đến <strong>Không bào tiêu hóa (Đáp án C)</strong>!</p>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🌈 2. Bốn Týp Collagen Kinh điển &amp; Sợi Chun (tr. 39–40) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_12')">🖼️ Hình 3.12</button></div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Loại Sợi / Týp</th>
                  <th>Hình thái &amp; Bắt màu Đặc hiệu</th>
                  <th>Vị trí Phân bố Chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Collagen týp I</strong><br/><em>(&gt; 80% lượng collagen cơ thể)</em></td>
                  <td>Tạo bó sợi dày lớn; bắt màu <strong>xanh lá cây</strong> (hoặc xanh dương trong trichrome).</td>
                  <td><strong>Lớp bì da, xương, sụn xơ, cân, dây chằng, gân cơ</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Collagen týp II</strong></td>
                  <td>KHÔNG tạo bó lớn mà tạo vi sợi rất mảnh đan thành cấu trúc giống <strong>tấm dạ phớt</strong> (0,31 µm) → nền trông đồng nhất dưới KHV quang học.</td>
                  <td>Đặc trưng duy nhất của <strong>sụn trong</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Collagen týp III</strong><br/><em>(Sợi lưới)</em></td>
                  <td>Sợi nhỏ, rất phân nhánh đan thành mạng lưới; <strong>không thấy bằng nhuộm thường → dùng kỹ thuật ngấm bạc (bắt màu ĐEN)</strong>.</td>
                  <td>Tạo khung đỡ trong các <strong>cơ quan tạo huyết</strong>, bao quanh <strong>tế bào mỡ</strong> và <strong>tế bào cơ trơn</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Collagen týp IV</strong></td>
                  <td>KHÔNG tạo vi sợi mà chỉ kết hợp bằng liên kết hóa học giữa các đầu phân tử (màng lọc 2,98 µm).</td>
                  <td><strong>Chỉ gặp trong các màng đáy cầu thận</strong> (và màng đáy biểu mô).</td>
                </tr>
                <tr>
                  <td><strong>Sợi chun</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_13')">🖼️ Hình 3.13</button></td>
                  <td>Do nguyên bào sợi &amp; <strong>TB cơ trơn</strong> sản xuất; co lại khi kéo giãn; nhuộm <strong>aldehyde fuchsin bắt màu TÍM</strong>. Gồm 2 thành phần: phân tử <strong>elastin</strong> (polypeptide <strong>750 acid amin</strong>) + vi sợi collagen đường kính <strong>10 nm</strong>.</td>
                  <td>Cơ quan thay đổi thể tích lớn: <strong>phổi</strong>, các <strong>động mạch lớn</strong> (chủ, phổi), dây chằng vàng, dây thanh âm.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">💧 3. Chất Căn bản Liên kết (tr. 40–41) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_13')">🖼️ Hình 3.13</button></div>
          <ul class="theory-list">
            <li><strong>Bản chất:</strong> Là thành phần vô định hình của chất nền ngoại bào, dạng <strong>gel rất ưa nước</strong> đảm bảo tính <strong>căng phồng</strong> của mô liên kết, liên kết tế bào – sợi và là nơi khuếch tán <strong>trao đổi chất với tuần hoàn máu</strong>.</li>
            <li><strong>Proteoglycan:</strong> Đại phân tử kích thước tới vài µm gồm 1 trục protein liên kết đồng hóa trị với hàng trăm chuỗi <strong>glycosaminoglycan (GAG)</strong> (chuỗi glucid cấu tạo bởi các phân tử <em>đường đôi</em>). Vì GAG cứng và rất ưa nước nên choán thể tích lớn, giữ nước mạnh.</li>
            <li><strong>Tập hợp Proteoglycan:</strong> Nhiều phân tử proteoglycan cùng gắn lên một sợi <strong>acid hyaluronic</strong> qua trung gian các <strong>protein nối</strong> → tạo tập hợp khối lượng phân tử lên đến <strong>hàng trăm triệu dalton</strong>!</li>
            <li><strong>Fibronectin:</strong> Đảm bảo sự liên kết giữa sợi và tế bào mô liên kết. Gồm <strong>2 phân tử protein gắn với nhau bằng cầu nối disulfur (<code>-S-S-</code>)</strong>: một phần nối với proteoglycan &amp; vi sợi collagen; phần khác móc vào <strong>siêu sợi actin</strong> trong tế bào qua trung gian protein xuyên màng.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🏷️ 4. Phân loại 4 Mô Liên kết Chính thức (tr. 41–42)</div>
          <p style="font-size:13.5px;margin-bottom:8px;">Tùy theo thành phần nào trong 3 thành phần (tế bào – sợi – chất căn bản) chiếm ưu thế:</p>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Loại MLK Chính thức</th>
                  <th>Thành phần Ưu thế</th>
                  <th>Vị trí &amp; Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a. Mô liên kết nhầy</strong> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_14')">🖼️ H.3.14</button></td>
                  <td><strong>Chất căn bản</strong> chiếm ưu thế.</td>
                  <td>Nhiều ở phôi thai (trung mô); hiếm ở người lớn (chỉ xung quanh một số tuyến và mạch máu).</td>
                </tr>
                <tr>
                  <td><strong>b. Mô liên kết thưa</strong> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_15')">🖼️ H.3.15</button></td>
                  <td><strong>Thành phần tế bào</strong> chiếm ưu thế, chất căn bản không đáng kể.</td>
                  <td>Phổ biến dưới biểu mô, mô đệm các cơ quan giàu mạch máu – tế bào miễn dịch.</td>
                </tr>
                <tr>
                  <td><strong>c. Mô liên kết đặc</strong> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_16')">🖼️ H.3.16</button></td>
                  <td><strong>Sợi collagen bó lớn</strong> chiếm ưu thế, ít nguyên bào sợi và ít chất căn bản.</td>
                  <td>
                    • <em>Không định hướng:</em> Bó sợi chạy mọi hướng — <strong>loại thường gặp nhất</strong> (vỏ bao cơ quan).<br/>
                    • <em>Có định hướng:</em> Bó song song ở <strong>gân, dây chằng</strong> (Câu 2A tr.45); lớp song song ở <strong>cân, lớp chân bì giác mạc</strong>.
                  </td>
                </tr>
                <tr>
                  <td><strong>d. Mô chun</strong> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_17')">🖼️ H.3.17</button></td>
                  <td><strong>Thành phần sợi chun</strong> chiếm ưu thế.</td>
                  <td><strong>Dây chằng vàng cột sống</strong>, <strong>dây thanh âm</strong>, các <strong>động mạch lớn</strong> (động mạch chủ, động mạch phổi).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Mô liên kết đặc có định hướng có đặc điểm nào sau đây?",
        source: "Mô học Trần Công Toại – Chương Mô liên kết, Câu tự lượng giá 2 (tr. 45)",
        options: [
          "Có thể có trong gân",
          "Thành phần cấu tạo chủ yếu là nguyên bào sợi",
          "Thành phần cấu tạo chủ yếu là chất căn bản",
          "Là mô thường gặp nhất ở vỏ bao của các cơ quan",
          "Chứa nhiều masto bào hơn các mô liên kết khác"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 45): 2.A – Có thể có trong gân (ngoài ra còn ở dây chằng, cân và lớp chân bì giác mạc). Mô ở vỏ bao các cơ quan là mô liên kết đặc KHÔNG định hướng."
      },
      {
        q: "Sự tổng hợp và hình thành sợi collagen liên quan đến các cấu trúc sau, NGOẠI TRỪ:",
        source: "Mô học Trần Công Toại – Chương Mô liên kết, Câu tự lượng giá 3 (tr. 45)",
        options: [
          "Không bào tiêu hóa",
          "Lưới nội bào hạt",
          "Bộ Golgi",
          "Nang vận chuyển",
          "Khoảng gian bào"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 45): 3.C – Không bào tiêu hóa không tham gia chuỗi tổng hợp collagen (Chuỗi tiền alpha ở LNBH → Procollagen ở Golgi → Túi/nang vận chuyển → Tropocollagen và lắp vi sợi ở khoảng gian bào)."
      },
      {
        q: "Đoạn nào mô tả ĐÚNG thông số siêu cấu trúc của sợi collagen và phân tử tropocollagen?",
        source: "Mô học Trần Công Toại – Mục II.2.a & Hình 3.10–3.11 (tr. 38–39)",
        options: [
          "Vân sáng-tối chu kỳ 64 nm; tropocollagen đường kính 1,5 nm, dài 280 nm gồm 3 chuỗi alpha (mỗi chuỗi ~1.000 acid amin)",
          "Vân chu kỳ 10 nm; tropocollagen gồm 1 chuỗi elastin 750 acid amin xoắn kép",
          "Không có vân ngang; procollagen tự lắp thành vi sợi ngay bên trong bộ Golgi",
          "Chuỗi tiền alpha cắt mất đoạn peptide ngay tại ribosom trước khi vào Golgi"
        ],
        answer: 0,
        explain: "Trang 38–39: Vi sợi collagen có băng tối và băng sáng luân phiên chu kỳ 64 nm (khoảng hở 30 nm). Mỗi phân tử tropocollagen có đường kính 1,5 nm, dài 280 nm, gồm 3 chuỗi alpha xoắn nhau (mỗi chuỗi ~1000 acid amin). Cắt đoạn peptide 2 đầu chỉ xảy ra ở MÔI TRƯỜNG NGOẠI BÀO."
      },
      {
        q: "Để phát hiện đặc hiệu sợi collagen týp III (sợi lưới) và sợi chun dưới kính hiển vi quang học, người ta lần lượt sử dụng hai kỹ thuật nhuộm nào?",
        source: "Mô học Trần Công Toại – Mục II.2 (tr. 39–40)",
        options: [
          "Sợi lưới (collagen III): kỹ thuật ngấm bạc (màu đen); Sợi chun: aldehyde fuchsin (màu tím)",
          "Sợi lưới: P.A.S (màu đỏ); Sợi chun: H&E thông thường (màu xanh lá)",
          "Sợi lưới: hematoxylin (màu vàng); Sợi chun: ngấm bạc (màu đen)",
          "Cả hai loại sợi đều chỉ thấy rõ nhất khi dùng thuốc nhuộm eosin"
        ],
        answer: 0,
        explain: "Trang 39–40: Sợi collagen týp III không thấy được bằng kỹ thuật nhuộm thường, muốn quan sát phải dùng kỹ thuật ngấm bạc (bắt màu đen). Muốn phát hiện sợi chun dùng phương pháp nhuộm aldehyde fuchsin (bắt màu tím)."
      },
      {
        q: "Cấu trúc hóa học của Fibronectin trong chất căn bản mô liên kết có vai trò gì và chứa liên kết đặc trưng nào?",
        source: "Mô học Trần Công Toại – Mục II.3 & Hình 3.13 (tr. 41)",
        options: [
          "Gồm 2 phân tử protein gắn nhau bằng cầu nối disulfur (-S-S-), nối proteoglycan/collagen với siêu sợi actin trong tế bào qua protein xuyên màng",
          "Gồm hàng trăm chuỗi đường đôi GAG tạo tập hợp trăm triệu dalton không gắn màng tế bào",
          "Gồm 3 chuỗi alpha 1000 acid amin nối đầu-đầu tại màng đáy cầu thận",
          "Gồm phân tử elastin 750 acid amin gắn với các tinh thể hydroxyapatite"
        ],
        answer: 0,
        explain: "Trang 41 (Hình 3.13): Fibronectin đảm bảo liên kết giữa sợi và tế bào mô liên kết; cấu tạo bởi 2 phân tử protein gắn qua cầu nối disulfur (-S-S-), một phần nối proteoglycan & vi sợi collagen, phần khác móc vào siêu sợi actin nội bào qua protein xuyên màng."
      },
      {
        q: "Mô chun tập trung ưu thế các sợi chun (nhuộm aldehyde fuchsin màu tím) thường gặp tại những cấu trúc nào ở người?",
        source: "Mô học Trần Công Toại – Mục II.4.d (tr. 42)",
        options: [
          "Dây chằng vàng của cột sống, dây thanh âm và các động mạch lớn (động mạch chủ, động mạch phổi)",
          "Gân cơ nhị đầu, cân cơ thẳng bụng và lớp chân bì giác mạc",
          "Lớp bì da, bao xơ gan và hạch bạch huyết",
          "Xương đặc Havers, đĩa đệm và sụn khớp"
        ],
        answer: 0,
        explain: "Trang 42: Mô chun có thành phần sợi chun chiếm ưu thế; ở người gặp trong dây chằng vàng của cột sống, dây thanh âm và các động mạch lớn như động mạch chủ, động mạch phổi."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: MÔ LIÊN KẾT CHUYÊN BIỆT: MÔ LƯỚI & MÔ MỠ
  // ========================================================================
  {
    id: 6,
    group: "II. MÔ LIÊN KẾT & MÔ CHUYÊN BIỆT",
    title: "Bài 6: Mô Liên kết Chuyên biệt: Mô Lưới & Mô Mỡ",
    shortTitle: "Mô Lưới & Mô Mỡ",
    textbookRef: "Mô học Trần Công Toại – Mục III & IV (tr. 33, 42–44)",
    summary: "Đặc điểm độc nhất của mô lưới (chỉ có 2 thành phần, không chất căn bản, mạng kép tế bào lưới + sợi lưới ở cơ quan tạo huyết); đại thể – vi thể mô mỡ, tuần hoàn tiểu thùy và phân biệt mỡ trắng vs mỡ nâu.",
    simId: "sim_reticular_adipose",
    simTitle: "Phòng Lab Mô Chuyên biệt: Soi Ngấm bạc Mô Lưới & So sánh Mỡ Trắng – Mỡ Nâu",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🕸️ 1. Mô Lưới (Reticular Tissue – tr. 42–43) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_18')">🖼️ Xem Hình 3.18</button></div>
          <ul class="theory-list">
            <li><strong>Định nghĩa Độc nhất:</strong> Mô lưới <strong>CHỈ CÓ HAI THÀNH PHẦN</strong> là <strong>các tế bào lưới</strong> và <strong>sợi lưới (sợi collagen týp III)</strong>, hoàn toàn <strong>KHÔNG có chất căn bản</strong>!</li>
            <li><strong>Phân bố &amp; Vai trò:</strong> Tạo thành khung đỡ nâng đỡ tế bào máu/miễn dịch trong các <strong>cơ quan tạo huyết</strong> như <strong>hạch bạch huyết, lách và tủy xương</strong>.</li>
            <li><strong>Hai kỹ thuật quan sát bổ sung nhau:</strong>
              <ul>
                <li><strong>Khi nhuộm ngấm bạc:</strong> Sợi lưới bắt màu <strong>đen</strong>, đan kết thành một mạng lưới thứ nhất; trong các mắt lưới chứa nhiều tế bào (ví dụ hồng cầu). Các tế bào lưới bám móc vào sợi lưới nên <em>khó thấy rõ</em> dưới kỹ thuật ngấm bạc.</li>
                <li><strong>Khi nhuộm thông thường (H&amp;E):</strong> Thấy rõ <strong>tế bào lưới</strong> là những tế bào <strong>hình sao</strong> có nhiều nhánh bào tương đan nối với nhau thành <strong>mạng lưới thứ hai</strong> móc chồng lên mạng lưới thứ nhất (tạo bởi các sợi lưới).</li>
              </ul>
            </li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy So sánh Kinh điển</div>
            <p>Mô liên kết chính thức có <strong>3 thành phần</strong> (tế bào + sợi + chất căn bản), mô sụn &amp; xương có <strong>3 thành phần</strong>, nhưng <strong>MÔ LƯỚI chỉ có 2 thành phần (tế bào lưới + sợi lưới collagen týp III), KHÔNG có chất căn bản</strong>! (Lưu ý: đừng nhầm với Câu 2A tr. 50 nói sai về mô sụn có 2 thành phần).</p>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🟡 2. Mô Mỡ (Adipose Tissue – tr. 43–44) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_3_19')">🖼️ Xem Hình 3.19</button></div>
          <ul class="theory-list">
            <li><strong>Đại thể (tr. 43):</strong> Nhìn bằng mắt thường, mô mỡ có vẻ <strong>đồng nhất và óng ánh</strong>.</li>
            <li><strong>Vi thể &amp; Tuần hoàn tiểu thùy:</strong>
              <ul>
                <li>Các tế bào mỡ liên kết thành <strong>tiểu thùy</strong>, phân cách nhau bởi các vách mỏng (là <strong>mô liên kết đặc</strong>).</li>
                <li>Mỗi tiểu thùy được phân bố <strong>1 tiểu động mạch</strong>, phân nhánh tạo ra một lưới mao mạch bên trong tiểu thùy → mô mỡ <strong>rất giàu mạch máu</strong>!</li>
                <li>Mỗi tế bào mỡ được bao quanh bởi một mạng lưới <strong>sợi collagen týp III (sợi lưới)</strong>.</li>
              </ul>
            </li>
            <li><strong>Quá trình tích tụ giọt mỡ:</strong> Khi lượng lipid còn ít, các giọt mỡ phân tán đều trong bào tương dưới dạng nhiều giọt nhỏ; khi tăng lên, các giọt nhỏ hòa nhập thành <strong>một giọt lớn duy nhất</strong> choáng gần hết bào tương, <strong>đẩy nhân bị ép dẹt sát màng tế bào</strong> tạo hình ảnh đặc trưng ("tế bào nhẫn").</li>
            <li><strong>Chức năng (4 vai trò):</strong> (1) Dự trữ năng lượng (tích mỡ từ bữa ăn và giải phóng giữa các bữa ăn), (2) Cách nhiệt chống lạnh, (3) Tạo hình cho cơ thể, (4) Bảo vệ cơ thể chống tác động cơ học.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚖️ 3. Bảng So sánh Mô Mỡ Trắng vs Mô Mỡ Nâu (tr. 44)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tiêu chí So sánh</th>
                <th>Mô Mỡ Trắng (Một không bào)</th>
                <th>Mô Mỡ Nâu (Nhiều không bào)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hình thái tế bào mỡ</strong></td>
                <td>Bào tương chứa <strong>1 giọt lipid rất lớn</strong> duy nhất choáng gần hết tế bào; nhân bị ép dẹt lệch hẳn ra sát màng.</td>
                <td>Bào tương chứa <strong>nhiều giọt mỡ nhỏ</strong> phân tán (không hòa nhập thành 1 giọt lớn); nhân tròn hơn ít bị ép dẹt sát rìa.</td>
              </tr>
              <tr>
                <td><strong>Nguyên nhân màu sắc</strong></td>
                <td>Màu trắng/vàng óng ánh đại thể do tích lipid.</td>
                <td>Màu nâu do <strong>hệ mao mạch rất phong phú</strong> và trong bào tương chứa <strong>rất nhiều ty thể</strong>.</td>
              </tr>
              <tr>
                <td><strong>Phân bố theo lứa tuổi &amp; Chức năng</strong></td>
                <td>Phổ biến ở người trưởng thành; dự trữ năng lượng, tạo hình, cách nhiệt thụ động, đệm cơ học.</td>
                <td><strong>Có nhiều ở trẻ sơ sinh</strong>; chuyên biệt sinh nhiệt không run chống lạnh (nhờ ty thể phong phú).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Đặc điểm cấu tạo nào sau đây giúp phân biệt ĐÚNG mô lưới với các mô liên kết khác?",
        source: "Mô học Trần Công Toại – Mục III (tr. 42–43)",
        options: [
          "Chỉ có hai thành phần là tế bào lưới và sợi lưới (collagen týp III), hoàn toàn không có chất căn bản",
          "Gồm tế bào lưới, sợi collagen týp I và chất căn bản giàu chondroitin sulfat",
          "Chỉ gồm sợi chun nhuộm tím aldehyde fuchsin không có tế bào",
          "Có màng lưới hai lớp bao bọc tương tự màng sụn"
        ],
        answer: 0,
        explain: "Trang 42–43: Định nghĩa mô lưới CHỈ có hai thành phần (tế bào lưới và sợi lưới – collagen týp III), KHÔNG có chất căn bản; tạo khung đỡ cho hạch bạch huyết, lách, tủy xương."
      },
      {
        q: "Trong mô lưới, khi quan sát bằng kỹ thuật ngấm bạc so với kỹ thuật nhuộm thông thường sẽ thấy gì?",
        source: "Mô học Trần Công Toại – Mục III & Hình 3.18 (tr. 43)",
        options: [
          "Ngấm bạc thấy sợi lưới bắt màu đen tạo mạng thứ nhất (khó thấy tế bào lưới); nhuộm thường thấy rõ tế bào lưới hình sao tạo mạng thứ hai chồng lên",
          "Ngấm bạc thấy rõ nhân tế bào lưới màu đỏ; nhuộm thường thấy sợi lưới màu đen",
          "Cả hai kỹ thuật đều chỉ nhuộm được hồng cầu trong mắt lưới",
          "Ngấm bạc hòa tan mất sợi collagen týp III để lộ chất căn bản"
        ],
        answer: 0,
        explain: "Trang 43: Nhuộm bạc làm sợi lưới bắt màu đen đan mạng lưới còn tế bào lưới khó thấy; bằng nhuộm thông thường ta thấy rõ tế bào lưới hình sao nhiều nhánh nối thành mạng thứ hai móc chồng lên mạng sợi lưới."
      },
      {
        q: "Trong mô mỡ, từng tế bào mỡ riêng lẻ được bao bọc trực tiếp bởi loại sợi nào, và vách ngăn cách các tiểu thùy mỡ là loại mô gì?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43)",
        options: [
          "Mỗi tế bào mỡ bọc bởi mạng sợi collagen týp III; vách ngăn giữa các tiểu thùy là mô liên kết đặc",
          "Mỗi tế bào mỡ bọc bởi sợi elastin; vách ngăn là biểu mô lát đơn",
          "Mỗi tế bào mỡ bọc bởi collagen týp II; vách ngăn là sụn xơ",
          "Mỗi tế bào mỡ không có sợi bao quanh; vách ngăn là mô liên kết nhầy"
        ],
        answer: 0,
        explain: "Trang 43: Các tế bào mỡ liên kết thành tiểu thùy phân cách bởi vách mỏng là mô liên kết đặc; mỗi tiểu thùy nhận 1 tiểu động mạch chia lưới mao mạch dày đặc; mỗi tế bào mỡ được bao quanh bởi mạng lưới sợi collagen týp III."
      },
      {
        q: "Màu nâu đặc trưng của mô mỡ nâu (gặp nhiều ở trẻ sơ sinh) được giải thích bởi hai yếu tố mô học nào?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 44)",
        options: [
          "Hệ thống mao mạch phong phú và trong bào tương tế bào chứa rất nhiều ty thể",
          "Bào tương chứa nhiều sắc tố melanin và hạt keratohyalin",
          "Đại thực bào tích tụ nhiều sắc tố hemosiderin từ hồng cầu vỡ",
          "Mỗi tế bào chứa 1 giọt lipid khổng lồ duy nhất ngấm muối natri"
        ],
        answer: 0,
        explain: "Trang 44: Mô mỡ nâu cấu tạo bởi các tế bào chứa nhiều giọt mỡ nhỏ trong bào tương; màu nâu là do mao mạch phong phú và trong bào tương chứa nhiều ty thể, gặp nhiều ở trẻ sơ sinh."
      },
      {
        q: "Về tuần hoàn mạch máu trong mô mỡ, phát biểu nào sau đây CHÍNH XÁC?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43)",
        options: [
          "Mô mỡ rất giàu mạch máu: mỗi tiểu thùy có 1 tiểu động mạch phân nhánh tạo lưới mao mạch bên trong tiểu thùy",
          "Mô mỡ hoàn toàn không có mạch máu, nuôi dưỡng bằng thẩm thấu qua vách liên kết đặc",
          "Chỉ có mô mỡ nâu có mạch máu còn mô mỡ trắng vô mạch giống sụn",
          "Mao mạch chỉ chạy ở vách mô liên kết ngoài mà không đi vào bên trong tiểu thùy"
        ],
        answer: 0,
        explain: "Trang 43: Mỗi tiểu thùy mỡ được phân bố 1 tiểu động mạch, phân nhánh tạo ra một lưới mao mạch bên trong tiểu thùy, do đó mô mỡ RẤT GIÀU MẠCH MÁU."
      },
      {
        q: "Trong tế bào mô mỡ trắng trưởng thành, hình thái đặc trưng trên lát cắt paraffin thông thường (sau bước khử nước – làm trong) là gì?",
        source: "Mô học Trần Công Toại – Mục IV.2 & Hình 3.19 (tr. 43–44)",
        options: [
          "Giọt lipid lớn hòa tan để lại khoảng sáng khổng lồ choán hết bào tương, đẩy nhân bị ép dẹt sát màng tế bào",
          "Nhiều giọt mỡ nhỏ đồng đều quanh nhân tròn nằm giữa tế bào",
          "Bào tương ái kiềm đậm chứa lưới nội bào hạt và Golgi sáng cạnh nhân",
          "Nhân đa hình chia thùy với các hạt ái kiềm chứa heparin"
        ],
        answer: 0,
        explain: "Trang 43–44 & Hình 3.19: Ở mô mỡ trắng, các giọt nhỏ hòa nhập thành 1 giọt lipid lớn duy nhất choáng hết bào tương làm nhân bị ép dẹt sát màng tế bào (lipid rửa trôi trong dung môi xử lý mô để lại khoảng sáng đặc trưng)."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: MÔ SỤN (SỤN TRONG, SỤN CHUN, SỤN XƠ, MÀNG SỤN & SINH SẢN)
  // ========================================================================
  {
    id: 7,
    group: "II. MÔ LIÊN KẾT & MÔ CHUYÊN BIỆT",
    title: "Bài 7: Mô Sụn (3 Loại Sụn, Màng Sụn & 2 Kiểu Sinh sản)",
    shortTitle: "Mô Sụn & Tăng trưởng Sụn",
    textbookRef: "Mô học Trần Công Toại – Bài Mô sụn (tr. 46–50)",
    summary: "Thành phần hóa học sụn tươi & khô; cấu tạo tế bào sụn, ổ sụn và cầu sụn giàu chondroitin sulfat; đối chiếu sụn trong, sụn chun và sụn xơ; màng sụn 2 lớp; sinh sản đắp thêm và sinh sản gian bào (kiểu vòng & kiểu trục); dinh dưỡng và lão hóa sụn.",
    simId: "sim_cartilage",
    simTitle: "Phòng Lab Mô Sụn: Đối chiếu Sụn Trong – Chun – Xơ & Mô phỏng Sinh sản Sụn",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🦴 1. Đại cương &amp; Thành phần Hóa học Mô Sụn (tr. 46–47) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_4_1')">🖼️ Xem Hình 4.1</button></div>
          <ul class="theory-list">
            <li><strong>Định nghĩa:</strong> Sụn là mô liên kết chuyên biệt tham gia cấu tạo bộ xương, gồm <strong>3 thành phần</strong>: tế bào sụn, chất căn bản sụn và sợi liên kết (chất căn bản + sợi = chất nền sụn).</li>
            <li><strong>Phân bố:</strong> Bộ xương phôi thai ban đầu toàn mô sụn rồi được thay thế dần bởi mô xương. Ở người trưởng thành còn ở <strong>tai, mũi, thanh quản, khí – phế quản, sụn sườn</strong> và <strong>sụn khớp</strong> (cùng dịch khớp ngăn cọ xát giữa các đầu xương).</li>
            <li><strong>Tỷ lệ thành phần:</strong>
              <ul>
                <li>Ít tế bào: tế bào chiếm <strong>≤ 10%</strong> trọng lượng.</li>
                <li><strong>Mô sụn tươi:</strong> <strong>70–80% nước</strong>, <strong>10–15% chất hữu cơ</strong>, <strong>4–7% chất khoáng</strong> (chủ yếu muối natri; nước 79–80%, khoáng 0,9–4% ở chất căn bản).</li>
                <li><strong>Mô sụn khô:</strong> Collagen chiếm <strong>50–70%</strong>; <strong>Chondroitin sulfat chiếm 40% trọng lượng khô</strong> (quyết định tính rắn, đàn hồi và tính ưa baz của mô sụn).</li>
              </ul>
            </li>
            <li><strong>Tại sao ghép sụn dễ dàng (Miễn dịch)? (tr. 47):</strong> Chất căn bản sụn ưa nước, khuếch tán được muối khoáng, chất chuyển hóa và khí; nhưng các <strong>phân tử protein lớn có tính kháng nguyên KHÔNG thể xâm nhập vào miếng sụn</strong> (và sụn vô mạch) → ghép sụn đồng loài ít bị thải ghép!</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🔬 2. Tế bào Sụn, Ổ Sụn &amp; Cầu Sụn (tr. 47) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_4_2')">🖼️ Xem Hình 4.2</button></div>
          <ul class="theory-list">
            <li><strong>Tế bào sụn &amp; Ổ sụn:</strong> Tế bào sụn nằm trong hốc nhỏ của chất căn bản gọi là <strong>ổ sụn</strong>; các ổ sụn ngăn cách bởi chất nền sụn. Mỗi ổ sụn có thể chứa <strong>1 hoặc một số tế bào sụn cùng nhóm</strong> (tế bào sụn cùng nguồn sau phân chia).</li>
            <li><strong>Nhân &amp; Bào tương:</strong> Nhân hình cầu có <strong>1 hoặc 2 hạt nhân</strong>; bào tương có đủ bào quan và chất vùi <strong>glycogen, lipid</strong> (lượng thay đổi tùy loại sụn).</li>
            <li><strong>Chất căn bản &amp; Cầu sụn:</strong> Nhuộm màu baz tương đối mịn. Vùng chất căn bản ngay xung quanh ổ sụn <strong>nhuộm màu đậm hơn</strong> (do tập trung nhiều chondroitin sulfat) gọi là <strong>cầu sụn</strong>.</li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">🔑 Dinh dưỡng &amp; Biến đổi Theo Tuổi (tr. 49–50)</div>
            <ul>
              <li><strong>Vô mạch:</strong> Mô sụn <strong>không có mạch máu</strong>. Sụn thông thường dinh dưỡng nhờ <strong>màng sụn</strong>; riêng <strong>sụn khớp</strong> (không có màng sụn) được nuôi bởi <strong>dịch khớp</strong> và từ <strong>mô xương Havers xốp phía dưới</strong>.</li>
              <li><strong>Lão hóa:</strong> Khi già, hàm lượng <strong>proteoglycan giảm</strong> → tính ưa nước giảm; bào quan &amp; hoạt tính men giảm nhưng <strong>glycogen tăng</strong>; ổ sụn chết bị chất căn bản &amp; collagen xâm nhập; sụn ngấm canxi từng nơi nên đục, cứng nhưng giòn hơn (rối loạn dinh dưỡng giữa miếng sụn có thể xuất hiện mạch máu &amp; cốt hóa).</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚖️ 3. So sánh Ba Loại Mô Sụn &amp; Màng Sụn (tr. 47–48) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_4_2')">🖼️ Hình 4.2</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_4_3')">🖼️ Hình 4.3</button></div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Đặc điểm Đối chiếu</th>
                <th>Sụn Trong (Hyaline)</th>
                <th>Sụn Chun (Elastic)</th>
                <th>Sụn Xơ (Fibrocartilage)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sợi liên kết chủ đạo</strong></td>
                <td><strong>Vi sợi collagen týp II</strong> (mảnh, cấu trúc giống tấm dạ phớt → nền đồng nhất dưới KHV quang học).</td>
                <td><strong>Sợi chun</strong> quanh ổ sụn, trong chất căn bản và xâm nhập từ màng sụn.</td>
                <td><strong>Sợi collagen týp I</strong> kết thành <strong>bó lớn xếp song song</strong> thấy rõ dưới KHV quang học.</td>
              </tr>
              <tr>
                <td><strong>Chondroitin sulfat, glycogen, lipid</strong></td>
                <td>Phong phú (chondroitin sulfat 40% trọng lượng khô).</td>
                <td><strong>Ít hơn</strong> so với sụn trong.</td>
                <td>Ít chất căn bản xen giữa các bó sợi collagen I; khác MLK đặc chủ yếu ở thành phần tế bào.</td>
              </tr>
              <tr>
                <td><strong>Màng sụn bao bọc</strong></td>
                <td><strong>Có màng sụn</strong> (<strong>NGOẠI TRỪ sụn ở diện khớp!</strong>).</td>
                <td><strong>Có màng sụn</strong> (sợi chun từ màng sụn đi vào sụn).</td>
                <td><strong>KHÔNG có màng sụn</strong> bao bọc!</td>
              </tr>
              <tr>
                <td><strong>Vôi hóa / Cốt hóa</strong></td>
                <td>Có thể vôi hóa (trong cốt hóa sụn &amp; khi già).</td>
                <td><strong>KHÔNG BAO GIỜ có hiện tượng vôi hóa!</strong></td>
                <td>Ít/rất hiếm vôi hóa sinh lý.</td>
              </tr>
              <tr>
                <td><strong>Vị trí trong cơ thể</strong></td>
                <td>Phổ biến nhất: <strong>sụn khớp, sụn đường hô hấp (mũi, thanh-khí-phế quản), sụn sườn</strong>, bộ xương phôi.</td>
                <td><strong>Vành tai, nắp thanh quản</strong>.</td>
                <td><strong>Một số dây chằng</strong> (và đĩa đệm liên đốt sống).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size:14px;margin-top:10px;"><strong>Cấu tạo Màng sụn (tr. 48):</strong> Là mô liên kết chính thức gồm <strong>2 lớp</strong>: <strong>lớp ngoài</strong> chứa nhiều sợi collagen; <strong>lớp trong</strong> chứa nhiều tế bào sợi non (hoặc tế bào trung mô) có khả năng sinh sản và biệt hóa thành <strong>nguyên bào sụn</strong> → vừa sinh sản vừa tạo chất căn bản tự vùi vào ổ sụn thành tế bào sụn. Khi hết tăng trưởng, màng sụn teo thành bao liên kết mảnh.</p>
      </div>

      <div class="card">
        <div class="card-title">🌱 4. Hai Kiểu Sinh sản của Mô Sụn (tr. 49) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_4_4')">🖼️ Xem Hình 4.4</button></div>
        <div class="grid-2">
          <div class="callout teal" style="margin:0;">
            <div class="callout-title">1. Sinh sản Đắp thêm (Từ Màng sụn – Ngoại vi)</div>
            <p>Sụn tăng trưởng theo chiều dày nhờ đắp thêm các lớp sụn mới từ <strong>lớp trong màng sụn</strong>: tế bào trung mô → nguyên bào sụn → tiết chất nền sụn và tự vùi vào ổ sụn trở thành tế bào sụn.</p>
          </div>
          <div class="callout pearl" style="margin:0;">
            <div class="callout-title">2. Sinh sản Gian bào (Từ Tế bào Sụn trong Ổ sụn)</div>
            <ul>
              <li><strong>Kiểu vòng:</strong> Tế bào sụn phân chia nhiều lần liên tiếp với <strong>mặt phẳng phân chia lần sau KHÁC lần trước</strong> → tạo nhóm tế bào sụn cùng nguồn <strong>xếp theo kiểu vòng</strong>.</li>
              <li><strong>Kiểu trục:</strong> Tế bào sụn phân chia với <strong>mặt phẳng phân chia KHÔNG ĐỔI</strong> → tạo nhóm tế bào sụn cùng nguồn <strong>xếp theo hàng dọc</strong> (thấy rõ ở sụn tiếp hợp!).</li>
            </ul>
          </div>
        </div>
        <div class="callout trap" style="margin-top:14px;">
          <div class="callout-title">⚠️ Lưu ý Kỹ thuật về Câu Tự lượng giá (tr. 50)</div>
          <p><strong>Câu 1 (Đáp án C):</strong> Mô sụn có chất căn bản rất ưa nước KHÔNG phải do chứa nhiều mạch máu (mô sụn vô mạch!) mà do giàu <em>proteoglycan / glycosaminoglycan (chondroitin sulfat)</em>.<br/>
          <strong>Câu 2 (Đáp án E):</strong> Tính ưa nước của chất căn bản sụn <strong>giảm dần theo thời gian</strong> (khi già hàm lượng proteoglycan giảm).<br/>
          <strong>Ghi chú Câu ghép cặp 3–7 (tr. 50):</strong> Đáp án in cuối trang 50 ghi <em>3.D; 4.A; 5.E; 6.C; 7.A</em>; tuy nhiên đối chiếu nguyên văn nội dung sách tr. 48–49: cả 3 loại sụn đều có thể chứa chondroitin sulfat (nhưng nhiều ở sụn trong), <em>sụn xơ và sụn diện khớp không có màng sụn</em>, <em>cả 3 loại sụn đều không chứa mạch máu</em>, sụn trong/chun có màng sụn nên sinh sản đắp thêm &amp; gian bào còn sụn xơ không màng sụn! Khi ôn thi YDS, cần nắm vững <strong>cả đáp án in sách lẫn lý thuyết nguyên văn tr. 47–49</strong>.</p>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Mô sụn có các tính chất sau, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô sụn, Câu tự lượng giá 1 (tr. 50)",
        options: [
          "Chất căn bản rất ưa nước do chứa nhiều mạch máu",
          "Gồm ba loại: sụn chun, xơ và trong, khác nhau chủ yếu ở thành phần sợi",
          "Mỗi ổ sụn có thể chứa nhiều tế bào sụn, mỗi tế bào có thể có một hoặc hai hạt nhân",
          "Sinh sản theo hai kiểu: đắp thêm hoặc gian bào",
          "Sụn xơ chỉ khác mô liên kết đặc ở thành phần tế bào do cùng chứa collagen týp I"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 50): 1.C – Mô sụn HOÀN TOÀN KHÔNG CÓ MẠCH MÁU; chất căn bản sụn rất ưa nước là nhờ giàu proteoglycan và chondroitin sulfat."
      },
      {
        q: "Phát biểu nào sau đây ĐÚNG về mô sụn?",
        source: "Mô học Trần Công Toại – Chương Mô sụn, Câu tự lượng giá 2 (tr. 50)",
        options: [
          "Tính ưa nước của chất căn bản giảm dần theo thời gian",
          "Là mô liên kết chuyên biệt do chỉ có hai thành phần: tế bào và sợi",
          "Sụn xơ không bao giờ bị vôi hóa",
          "Sụn trong chứa sợi collagen týp I",
          "Sụn chun thường gặp ở dây chằng"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 50): 2.E – Khi già, hàm lượng proteoglycan giảm nên tính ưa nước của chất căn bản giảm dần theo thời gian. Sụn có 3 thành phần; sụn CHUN mới không bao giờ vôi hóa (gặp ở vành tai, nắp thanh quản); sụn trong chứa collagen týp II."
      },
      {
        q: "Vì sao khi ghép miếng sụn thường đạt tỷ lệ thành công cao và ít bị thải ghép miễn dịch?",
        source: "Mô học Trần Công Toại – Mục III (tr. 47)",
        options: [
          "Chất căn bản sụn tuy cho muối khoáng và chất nhỏ khuếch tán nhưng ngăn không cho các phân tử protein lớn có tính kháng nguyên xâm nhập vào miếng sụn (và sụn vô mạch)",
          "Tế bào sụn tiết histamin và heparin ức chế hoàn toàn tương bào và lympho B",
          "Màng sụn có lớp tế bào đài tiết nhầy bọc kín bên ngoài",
          "Sụn chứa 70% hydroxyapatite vô cơ giống mô xương nên trơ về mặt miễn dịch"
        ],
        answer: 0,
        explain: "Trang 47: Chất căn bản sụn ưa nước, khuếch tán được muối khoáng, chất chuyển hóa và khí; nhưng các phân tử protein lớn có tính kháng nguyên không thể vào miếng sụn được → giải thích tại sao có thể ghép sụn dễ dàng."
      },
      {
        q: "Loại sụn nào KHÔNG BAO GIỜ có hiện tượng vôi hóa và thường gặp ở vành tai, nắp thanh quản?",
        source: "Mô học Trần Công Toại – Mục IV (tr. 48)",
        options: [
          "Sụn chun",
          "Sụn trong ở sụn sườn",
          "Sụn trong ở sụn tiếp hợp xương dài",
          "Sụn xơ ở đĩa đệm"
        ],
        answer: 0,
        explain: "Trang 48: Sụn chun có thành phần sợi là sợi chun, ít lipid/glycogen/chondroitin sulfat hơn sụn trong, KHÔNG BAO GIỜ có hiện tượng vôi hóa, gặp ở vành tai và nắp thanh quản."
      },
      {
        q: "Sự khác biệt giữa sinh sản gian bào kiểu vòng và kiểu trục của tế bào sụn là gì?",
        source: "Mô học Trần Công Toại – Mục VI.1 & Hình 4.4 (tr. 49)",
        options: [
          "Kiểu vòng có mặt phẳng phân chia lần sau khác lần trước tạo nhóm xếp vòng; kiểu trục có mặt phẳng phân chia không đổi tạo hàng dọc",
          "Kiểu vòng xuất phát từ lớp ngoài màng sụn; kiểu trục xuất phát từ ống tủy xương",
          "Kiểu vòng chỉ có ở sụn xơ; kiểu trục chỉ có ở sụn chun",
          "Kiểu vòng tạo tế bào sụn chết; kiểu trục tạo hủy cốt bào"
        ],
        answer: 0,
        explain: "Trang 49 & Hình 4.4: Trong sinh sản gian bào, kiểu vòng đổi mặt phẳng phân chia tạo nhóm tế bào cùng nguồn xếp vòng, còn kiểu trục giữ nguyên mặt phẳng phân chia tạo nhóm tế bào xếp thành hàng dọc."
      },
      {
        q: "Hai loại sụn nào sau đây KHÔNG có màng sụn bao bọc (nên sụn khớp phải nhận dinh dưỡng từ dịch khớp và xương xốp bên dưới)?",
        source: "Mô học Trần Công Toại – Mục V & VI.2 (tr. 48–49)",
        options: [
          "Sụn ở diện khớp (sụn khớp) và Sụn xơ",
          "Sụn trong ở khí quản và Sụn chun ở vành tai",
          "Sụn sườn và Sụn thanh quản",
          "Sụn tiếp hợp và Sụn vách mũi"
        ],
        answer: 0,
        explain: "Trang 48 (Mục V): Ngoại trừ sụn ở diện khớp và sụn xơ, tất cả các loại sụn khác đều có màng sụn bao bọc. Sụn khớp được nuôi bởi dịch khớp và xương Havers xốp dưới sụn (tr. 49)."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: MÔ XƯƠNG (CẤU TẠO ĐẠI THỂ, VI THỂ, KHỚP, TẠO XƯƠNG & BỆNH LÝ)
  // ========================================================================
  {
    id: 8,
    group: "II. MÔ LIÊN KẾT & MÔ CHUYÊN BIỆT",
    title: "Bài 8: Mô Xương (Đại thể, 3 Tế bào, Khớp, Tạo xương & Bệnh lý)",
    shortTitle: "Mô Xương & Bệnh lý Chuyển hóa",
    textbookRef: "Mô học Trần Công Toại – Bài Mô xương (tr. 51–64)",
    summary: "Định nghĩa lá xương (7 µm) và thành phần 30% hữu cơ / 70% vô cơ (hydroxyapatite); đại thể xương đặc/xốp & dài/ngắn/dẹt; 3 tế bào xương (tạo cốt bào, cốt bào, hủy cốt bào); màng xương, tủy xương, 3 loại khớp; cốt hóa màng – trong sụn – tu sửa Havers; và 4 bệnh lý (Scocbut, Còi xương, Nhuyễn xương, Loãng xương).",
    simId: "sim_bone_remodeling",
    simTitle: "Phòng Lab Chuyển hóa Xương: Hormon (PTH/Calcitonin) – Vitamin (C/D) – Tu sửa Havers",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🦴 1. Định nghĩa, Hóa học &amp; Đại thể Mô Xương (tr. 51–53) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_1')">🖼️ H.5.1</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_2')">🖼️ H.5.2</button></div>
          <ul class="theory-list">
            <li><strong>Định nghĩa:</strong> Xương là mô liên kết đặc biệt đã bị canxi hóa và có cấu trúc dạng lá. <strong>Lá xương</strong> là đơn vị cấu tạo của mô xương (chiều dày mỗi lá khoảng <strong>7 µm</strong>), gồm tế bào xương và chất nền xương (chất căn bản + sợi liên kết).</li>
            <li><strong>4 chức năng chính:</strong> Chống đỡ, vận động, bảo vệ, hỗ trợ <strong>tạo huyết</strong> và <strong>chuyển hóa phospho-canxi</strong> (câu 1 tr.64: dự trữ glycogen KHÔNG phải chức năng của xương!).</li>
            <li><strong>Cơ học:</strong> Chịu lực kéo <strong>15 kg/mm²</strong> và lực nén <strong>10 kg/mm²</strong>; luôn đổi mới liên tục suốt đời nhờ cân bằng tạo – hủy xương.</li>
            <li><strong>Thành phần Chất nền xương (tr. 51, 56):</strong>
              <ul>
                <li><strong>30% Chất hữu cơ:</strong> <strong>95% là collagen</strong> (hầu hết <strong>collagen týp I</strong>, ít týp V; mỗi lá xếp song song một hướng, đổi hướng giữa các lá); <strong>5%</strong> còn lại là proteoglycan, glycoprotein và protein không collagen (<strong>osteonectin</strong> gắn collagen với muối khoáng; <strong>osteocalcin/osteocanxi</strong> gắn canxi giúp canxi hóa).</li>
                <li><strong>70% Chất vô cơ:</strong> Thành phần vô định hình (muối phốt phát canxi <code>Ca₉(PO₄)₆</code>) và thành phần tinh thể hình que/ống (<strong>hydroxyapatite <code>Ca₅(PO₄)₃OH</code></strong>).</li>
              </ul>
            </li>
            <li><strong>2 Dạng Đại thể &amp; 3 Loại Giải phẫu:</strong>
              <ul>
                <li><strong>Xương đặc (Havers đặc):</strong> Không có hốc, lá xương xếp vòng đồng tâm quanh <strong>ống Havers</strong> (chứa mạch, mô liên kết).</li>
                <li><strong>Xương xốp (Havers xốp):</strong> Lá xương tạo hệ thống vách mỏng gọi là <strong>bè xương</strong>, giữa các bè có hốc chứa tủy xương.</li>
                <li><strong>Xương dẹt:</strong> 2 bản đặc kẹp 1 lớp xốp (một số có xoang khí); <strong>Xương ngắn:</strong> khối xốp bọc vỏ đặc mỏng; <strong>Xương dài:</strong> 2 đầu xốp (mặt khớp là sụn trong), vùng chuyển tiếp (sụn tiếp hợp khi tăng trưởng) và thân xương đặc quanh ống tủy (cắt ngang gồm <strong>3 lớp</strong>: hệ thống cơ bản ngoài, lớp giữa Havers đặc dày nhất, hệ thống cơ bản trong rất mỏng).</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🔬 2. Ba Loại Tế bào Mô Xương (tr. 53–55) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_3')">🖼️ H.5.3</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_4')">🖼️ H.5.4</button></div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tế bào &amp; Nguồn gốc</th>
                  <th>Đặc điểm Nhận diện Vi/Siêu vi thể</th>
                  <th>Chức năng &amp; Điều hòa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Tạo cốt bào (Osteoblast)</strong><br/><em>Nguồn: TB sinh xương (trung mô)</em></td>
                  <td>Hình vuông, bầu dục, tháp trên bề mặt giá đỡ (bè xương đang tạo); bào tương <strong>ái kiềm</strong> (nhiều LNBH); nhân tròn lợt màu, hạt nhân rõ ở phía đối diện giá đỡ.</td>
                  <td>Quyết định tăng/giảm tạo xương: sản xuất <strong>chất dạng xương (chất tiền xương)</strong>; chế enzym ức chế &amp; tham gia canxi hóa; tiết prostaglandin ức chế hoặc yếu tố kích hoạt hủy cốt bào. Chịu ảnh hưởng PTH, calcitonin, GH, vitamin C, lực cơ học.</td>
                </tr>
                <tr>
                  <td><strong>2. Cốt bào (Osteocyte)</strong><br/><em>Nguồn: Từ tạo cốt bào</em></td>
                  <td>Chiếm ~10% trọng lượng mô xương; vùi trong <strong>ổ xương</strong>; nhánh bào tương mảnh trong <strong>vi quản xương</strong> (chứa dịch giàu <strong>glycoprotein</strong> nối tiếp xúc các cốt bào). Bào quan kém phát triển, <strong>không có trung thể</strong>.</td>
                  <td>Dưới kiểm soát hormon giáp &amp; cận giáp, trao đổi canxi xương–máu; có <strong>2 chức năng trái ngược</strong>: tiếp tục tạo &amp; canxi hóa duy trì nền xương vs tiêu hủy xương bằng lysosome.</td>
                </tr>
                <tr>
                  <td><strong>3. Hủy cốt bào (Osteoclast)</strong><br/><em>Nguồn: Dòng mono bào đặc biệt trong tủy xương</em></td>
                  <td><strong>Khổng lồ đa nhân (3 đến vài chục nhân)</strong>, kích thước vài chục đến vài trăm µm; chụp lên vách xương như <strong>giác hút</strong>; cực sát xương có nhiều không bào &amp; <strong>nếp gấp (viền bàn chải)</strong>, nhiều ty thể; nhân ở cực đối diện.</td>
                  <td>Tiêu hủy xương &amp; sụn nhiễm canxi cường độ cao (tu sửa xương): giải phóng vào các ống nhỏ <strong>proton H⁺</strong> (hòa tan hydroxyapatite) và <strong>enzym</strong> (tách hủy collagen) → đưa Ca²⁺/PO₄³⁻ vào máu, điều hòa bởi hormon giáp &amp; cận giáp.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩹 3. Màng Xương, Tủy Xương &amp; Khớp Xương (tr. 56–57) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_5')">🖼️ H.5.5</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_6')">🖼️ H.5.6</button></div>
          <ul class="theory-list">
            <li><strong>Màng ngoài xương:</strong> Bao bọc xương (trừ diện khớp – Câu 2B tr.64!), gồm 2 lớp: ngoài nhiều bó sợi collagen song song mặt xương; trong nhiều TB trung mô/nguyên bào sợi biến thành tạo cốt bào đắp lá xương làm tăng đường kính xương.</li>
            <li><strong>Màng trong xương:</strong> Lót ống tủy, lòng ống Havers và các vách xương xốp; gồm TB trung mô + ít sợi collagen (có thể tạo tạo cốt bào).</li>
            <li><strong>4 loại Tủy xương:</strong> <em>Tủy tạo cốt</em> (có TB sinh xương &amp; mono bào), <em>tủy tạo huyết</em> (mô lưới), <em>tủy mỡ màu vàng</em> (dự trữ mỡ), <em>tủy xơ màu xám</em> (TB sợi + collagen).</li>
            <li><strong>3 loại Khớp xương:</strong> Khớp bất động (vòm sọ), Khớp bán động (liên đốt sống, khớp mu), <strong>Khớp động</strong> gồm 4 thành phần:
              <ol>
                <li><strong>Sụn khớp:</strong> Sụn trong không có màng sụn, có <strong>4 lớp</strong> (bề mặt, trung gian, chính, sâu).</li>
                <li><strong>Bao khớp:</strong> Nhiều sợi collagen, ít TB và mạch; có thần kinh cảm giác và tiểu thể xúc giác (<strong>Pacini, Ruffini</strong>).</li>
                <li><strong>Màng hoạt dịch:</strong> 2 lớp xơ chun + lớp phủ bề mặt gồm <strong>3 loại tế bào</strong>: <strong>TB A</strong> (khớp thực bào), <strong>TB B</strong> (tế bào sợi khớp tạo dịch khớp &amp; acid hyaluronic), <strong>TB C</strong> (trung gian A–B).</li>
                <li><strong>Ổ khớp:</strong> Chứa dịch khớp (cơ học + dinh dưỡng sụn khớp).</li>
              </ol>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🏗️ 4. Các Kiểu Tạo xương, Tu sửa Havers &amp; Tạo Lá xương (tr. 58–62) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_7')">🖼️ H.5.7</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_8')">🖼️ H.5.8</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_9')">🖼️ H.5.9</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_10')">🖼️ H.5.10</button></div>
          <ul class="theory-list">
            <li><strong>Tạo xương nguyên phát vs thứ phát:</strong> Nguyên phát = xây dựng từ mô liên kết kiểu màng hoặc từ mô hình sụn (gồm 3 kiểu tạo xương: từ màng, từ sụn, từ xương). Thứ phát = phá hủy &amp; sửa sang tạo xương từ xương (<strong>tu sửa Havers</strong>). Lưu ý: <strong>Ở người già vẫn còn hiện tượng tạo xương</strong> (Câu 4D tr.64!).</li>
            <li><strong>Cốt hóa màng (từ mô liên kết kiểu màng, VD: xương sọ):</strong> Chất gian bào trung mô thành vách đậm đặc → TB trung mô biệt hóa tạo cốt bào đắp chất căn bản &amp; collagen → tạo cốt bào vùi thành cốt bào tạo lá xương; trung mô quanh thành màng xương.</li>
            <li><strong>Cốt hóa trong sụn (xương dài – 6 bước A→F, tr. 59):</strong> (A) Miếng sụn trong → (B) Phì đại &amp; canxi hóa trung tâm → (C) Phì đại lan tới màng sụn làm màng sụn hóa <strong>màng ngoài xương</strong> đắp bao xương đặc nguyên phát → (D) Mạch máu &amp; mô LK chui qua bao xương phá sụn phì đại tạo hốc, màng xương đắp lá thứ 2 → (E) TB trung mô theo máu biến thành tạo cốt bào đắp vách xương lên vách sụn canxi hóa → (F) Hủy cốt bào phá vách xương trong sụn mở rộng <strong>ống tủy</strong>.</li>
            <li><strong>Sụn tiếp hợp ở vùng chuyển tiếp (4 vùng từ đầu → thân xương):</strong> (1) Sụn trong, (2) Sụn xếp hàng, (3) Sụn phì đại (sụn tiết enzym khởi phát canxi hóa rồi tự thoái hóa), (4) Vùng xâm nhập mạch máu – mô liên kết (sụn nhiễm canxi).</li>
            <li><strong>Tu sửa Havers (Hình 5.9 A–D):</strong> (D) Hủy cốt bào khoét đường hầm tạo <strong>hốc tiêu xương</strong> → (C) Mạch máu + trung mô vào đắp lá xương đầu tiên (<strong>viền tiền cốt</strong> chưa vôi hóa) → (B) Tiếp tục đắp các lá đồng tâm vào trong làm hẹp dần ống → (A) Hoàn thành <strong>hệ thống Havers</strong> có ranh giới ngoài là <strong>đường xi măng</strong> (vết tích vách hốc tiêu xương).</li>
            <li><strong>Tạo một lá xương (2 giai đoạn) &amp; Ngấm canxi (Hình 5.10):</strong> (5.1) Tạo cốt bào tiết chất dạng xương lên giá đỡ → (5.2) Canxi hóa: Ca²⁺ từ tạo cốt bào/cốt bào kết hợp PO₄³⁻ ngoại bào → muối phốt phát canxi vô định hình → tinh thể hydroxyapatite qua 2 bước <strong>tạo nhân</strong> (trụ bình hành) và <strong>bồi tụ</strong> (75% lượng muối ngay ban đầu, hoàn tất sau nhiều tuần).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🩺 5. Bốn Bệnh lý Phát triển Xương Kinh điển (tr. 61–63) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_11')">🖼️ H.5.11 Còi xương</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_5_12')">🖼️ H.5.12 Scocbut &amp; Biểu đồ tr.63</button></div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Bệnh lý</th>
                <th>Nguyên nhân &amp; Cơ chế Mô – Hóa học</th>
                <th>Biến đổi Hữu cơ vs Vô cơ &amp; Lâm sàng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bệnh Scocbut (Scurvy)</strong></td>
                <td>Thiếu <strong>Vitamin C</strong> → giảm tổng hợp chất căn bản &amp; collagen xương nhưng <strong>KHÔNG làm giảm sự nhiễm canxi</strong>.</td>
                <td><strong>Giảm chất hữu cơ</strong>, vô cơ bình thường → chiều dày xương giảm dễ gãy; chảy máu chân răng, da tái thiếu máu, mắt trũng.</td>
              </tr>
              <tr>
                <td><strong>Bệnh Còi xương (Rickets)</strong></td>
                <td>Trẻ em thiếu <strong>Vitamin D / Canxi</strong> → giảm hấp thu Ca và P ở thành ruột → vôi hóa không hoàn toàn.</td>
                <td>Thành phần <strong>hữu cơ bình thường/tăng</strong> nhưng <strong>giảm vô cơ</strong> → xương mềm cong biến dạng: <em>thóp chậm đóng, xương sườn lõm chuỗi hạt sườn, tay cong, khớp sưng, chân cong</em>.</td>
              </tr>
              <tr>
                <td><strong>Bệnh Nhuyễn xương (Osteomalacia)</strong></td>
                <td>"Còi xương ở người lớn": khẩu phần thiếu Vitamin D và Canxi → lắng đọng vô cơ không hoàn toàn.</td>
                <td><strong>Giảm vô cơ và tăng hữu cơ</strong> (chất dạng xương không vôi hóa) → đau xương, biến dạng xương sớm.</td>
              </tr>
              <tr>
                <td><strong>Bệnh Loãng xương (Osteoporosis)</strong></td>
                <td>Người già, nữ mãn kinh (thiếu hormon), ít vận động, điều trị corticoid: đời sống tạo cốt bào ngắn → <strong>tạo xương chậm hơn hủy xương</strong>.</td>
                <td><strong>Giảm CẢ vô cơ VÀ hữu cơ</strong> (toàn bộ khối lượng xương giảm) nhưng <strong>TỶ LỆ vô cơ/hữu cơ KHÔNG THAY ĐỔI</strong>! Không triệu chứng cho tới khi đột ngột gãy xương, còng lưng.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Xương có các chức năng sau, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô xương, Câu tự lượng giá 1 (tr. 64)",
        options: [
          "Dự trữ glycogen",
          "Chống đỡ",
          "Vận động",
          "Tạo máu",
          "Chuyển hoá phospho-canxi"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 64): 1.D – Dự trữ glycogen KHÔNG phải chức năng của mô xương (xương có 4 chức năng: chống đỡ, vận động, bảo vệ / tạo máu và chuyển hóa phospho-canxi)."
      },
      {
        q: "Xương dài có các đặc điểm sau, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô xương, Câu tự lượng giá 2 (tr. 64)",
        options: [
          "Màng ngoài xương bao phủ toàn bộ xương dài",
          "Có hai dạng đại thể: đặc và xốp",
          "Được tạo bởi các lá xương xếp song song",
          "Có vùng chuyển tiếp nằm giữa đầu và thân",
          "Gồm hai đầu xương xốp và một thân xương đặc"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 64): 2.B – Màng ngoài xương KHÔNG bao phủ toàn bộ xương dài vì phía diện khớp ở hai đầu xương được phủ bởi sụn khớp (sụn trong không có màng sụn, không có màng xương)."
      },
      {
        q: "Chất nền xương có các đặc điểm sau, TRỪ MỘT:",
        source: "Mô học Trần Công Toại – Chương Mô xương, Câu tự lượng giá 3 (tr. 64)",
        options: [
          "Hủy cốt bào quyết định nồng độ canxi trong máu",
          "Chất vô cơ chiếm tỷ lệ nhiều nhất",
          "Sợi collagen týp I tạo nên chất hữu cơ",
          "Hydroxy apatit thuộc thành phần vô cơ",
          "Tạo cốt bào quyết định việc nhiễm canxi"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 64): 3.E – Trang 56 nêu nồng độ canxi máu được quyết định bởi CẢ HAI quá trình (nhiễm canxi của tạo cốt bào & giải phóng canxi của hủy cốt bào) và điều hòa bởi hormon PTH, calcitonin, vitamin D, chứ không do một mình hủy cốt bào quyết định."
      },
      {
        q: "Phát biểu nào sau đây ĐÚNG về mô xương?",
        source: "Mô học Trần Công Toại – Chương Mô xương, Câu tự lượng giá 4 (tr. 64)",
        options: [
          "Ở người già, vẫn còn hiện tượng tạo xương",
          "Có hai dạng đại thể: xương dài và xương ngắn",
          "Màng trong xương cấu tạo bởi biểu mô vuông đơn",
          "Chất căn bản ngấm chondroitin sulfat",
          "Có hai loại tế bào: tạo cốt bào và hủy cốt bào"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 64): 4.D – Ở người già vẫn luôn song song diễn ra hiện tượng tạo xương và hủy xương (chỉ là tạo xương chậm hơn hủy xương gây loãng xương). Mô xương có 3 tế bào (thêm cốt bào); đại thể là đặc/xốp; màng trong xương là TB trung mô & ít collagen."
      },
      {
        q: "Đoạn nào mô tả ĐÚNG bản chất biến đổi thành phần xương trong bệnh Loãng xương (Osteoporosis) so với Nhuyễn xương (Osteomalacia) và Scocbut (Scurvy)?",
        source: "Mô học Trần Công Toại – Mục IV.6 & Biểu đồ (tr. 62–63)",
        options: [
          "Loãng xương giảm cả vô cơ và hữu cơ (tỷ lệ không đổi); Nhuyễn xương giảm vô cơ và tăng hữu cơ; Scocbut giảm hữu cơ nhưng không giảm nhiễm canxi",
          "Loãng xương giảm riêng vô cơ; Nhuyễn xương giảm cả hai; Scocbut thừa vitamin D",
          "Loãng xương tăng chất dạng xương chưa vôi hóa; Scocbut thiếu hormon cận giáp PTH",
          "Cả ba bệnh đều có tỷ lệ chất vô cơ và hữu cơ giữ nguyên không đổi"
        ],
        answer: 0,
        explain: "Trang 62–63 (Biểu đồ so sánh tr. 63): Xương bình thường (30% hữu cơ, 70% vô cơ); Loãng xương giảm cả vô cơ và hữu cơ nên tỷ lệ không đổi; Nhuyễn xương / Còi xương giảm vô cơ và tăng/giữ hữu cơ; Scocbut (thiếu vit C) giảm tổng hợp hữu cơ mà không giảm nhiễm canxi."
      },
      {
        q: "Trong hệ thống Havers hình thành từ quá trình tu sửa xương thứ phát (Hình 5.9), ranh giới ngoài của mỗi hệ thống Havers được gọi là gì và dấu vết của nó bắt nguồn từ đâu?",
        source: "Mô học Trần Công Toại – Mục IV.4 & Hình 5.9 (tr. 60–61)",
        options: [
          "Đường xi măng ngoằn ngoèo – là vết tích của vách hốc tiêu xương do hủy cốt bào khoét ban đầu",
          "Viền tiền cốt – là lớp tủy mỡ màu vàng bao quanh ống tủy",
          "Cầu sụn – là phần chất căn bản giàu chondroitin sulfat còn sót lại",
          "Màng ngoài xương – là lớp bó sợi collagen song song mặt ngoài thân xương"
        ],
        answer: 0,
        explain: "Trang 61: Hủy cốt bào khoét hốc tiêu xương (D) → mạch máu + trung mô vào đắp các lá đồng tâm (C→B→A) từ ngoài vào trong. Giới hạn ngoài cùng của hệ thống Havers là đường xi măng ngoằn ngoèo — thực chất là vết tích của vách hốc tiêu xương."
      }
    ]
  }
];
