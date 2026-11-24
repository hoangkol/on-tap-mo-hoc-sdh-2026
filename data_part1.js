// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: CHUYÊN ĐỀ I – BIỂU MÔ (BÀI 1 ĐẾN BÀI 3)
// Chuẩn Giáo trình Mô học (PGS.TS. Trần Công Toại, NXB ĐHQG TP.HCM 2020/2021) – tr. 18–32
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: ĐẠI CƯƠNG, SINH HỌC BIỂU MÔ & LIÊN KẾT GIỮA CÁC TẾ BÀO
  // ========================================================================
  {
    id: 1,
    group: "I. BIỂU MÔ",
    title: "Bài 1: Đại cương, Sinh học Biểu mô & Liên kết Tế bào",
    shortTitle: "Đại cương & Liên kết Biểu mô",
    textbookRef: "Mô học Trần Công Toại – Bài Biểu mô (tr. 18–19, 20–23, 30–32)",
    summary: "Định nghĩa và 4 đặc điểm sinh học cốt lõi của biểu mô; phân biệt hai nhóm lớn (biểu mô phủ vs biểu mô tuyến); 5 chức năng; biến đổi cực đỉnh/cực đáy và 6 cấu trúc liên kết giữa các tế bào biểu mô.",
    simId: "sim_epi_junctions",
    simTitle: "Phòng Lab Siêu cấu trúc Biểu mô: Cực đỉnh – Cực đáy & 6 Liên kết Tế bào",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Định nghĩa &amp; Đặc điểm Chung của Biểu mô</div>
          <ul class="theory-list">
            <li><strong>Định nghĩa (tr. 18):</strong> Biểu mô là mô cấu tạo bởi các tế bào <strong>liên kết với nhau chặt chẽ</strong> và có <strong>rất ít hoặc không có cấu trúc gian bào</strong>, che phủ bề mặt cơ thể hoặc lót bên trong các cơ quan và tạo chức năng chế tiết ở các tuyến.</li>
            <li><strong>Đặc điểm bào tương &amp; gắn kết:</strong>
              <ul>
                <li>Bào tương tế bào biểu mô chứa <strong>siêu sợi keratin</strong> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_1')">🖼️ Xem Hình 2.1</button>.</li>
                <li>Các tế bào biểu mô liên kết chặt chẽ với nhau bằng nhiều loại liên kết tế bào.</li>
                <li>Biểu mô luôn gắn vào mô liên kết (mô đệm) bên dưới qua trung gian một <strong>màng đáy</strong>.</li>
              </ul>
            </li>
            <li><strong>4 Đặc điểm Sinh học cốt lõi (tr. 30–31):</strong>
              <ol>
                <li><strong>Nguồn gốc phôi thai đa dạng:</strong> Biểu mô có thể xuất nguồn từ cả 3 lá phôi: <strong>ngoại bì</strong> (biểu bì da), <strong>nội bì</strong> (niêm mạc ống tiêu hóa, hô hấp) hoặc <strong>trung bì phôi</strong> (nội mô mạch máu, trung biểu mô thanh mạc, ống thận).</li>
                <li><strong>Không chứa mạch máu:</strong> Trong biểu mô <strong>không có mạch máu</strong>. Biểu mô được nuôi dưỡng nhờ sự thẩm thấu (khuếch tán) các chất dinh dưỡng từ mô liên kết (mô đệm) qua màng đáy.</li>
                <li><strong>Khả năng tái tạo mạnh:</strong> Hầu hết biểu mô, đặc biệt là biểu mô phủ, có khả năng phân bào tái tạo rất mạnh để bù đắp tế bào bong tróc hoặc tổn thương.</li>
                <li><strong>Phân bố thần kinh:</strong> Tuy vô mạch nhưng biểu mô đôi khi có phân bố <strong>đầu tận thần kinh</strong> rất phong phú giúp thu nhận cảm giác.</li>
              </ol>
            </li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Trắc nghiệm Kinh điển</div>
            <p>Khác với mô liên kết (chủ yếu trung bì) luôn giàu mạch máu và chất gian bào, <strong>biểu mô là mô có nguồn gốc từ cả 3 lá phôi, KHÔNG có mạch máu và hầu như KHÔNG có chất gian bào</strong>. Tuyến nội tiết tuy mất ống dẫn nhưng vẫn giữ tính chất tế bào gắn chặt thành lá/đám và tiếp xúc mao mạch mô đệm.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🔬 2. Hai Nhóm Lớn &amp; 5 Chức năng của Biểu mô</div>
          <p style="font-size:14px;margin-bottom:8px;">Người ta phân biệt hai nhóm biểu mô chính <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_2')">🖼️ Xem Hình 2.2</button>:</p>
          <ul class="theory-list">
            <li><strong>Biểu mô phủ:</strong> Lợp mặt trong, mặt ngoài các khoang cơ thể hoặc phủ mặt ngoài cơ quan; <em>luôn tựa lên một mô đệm</em>.</li>
            <li><strong>Biểu mô tuyến:</strong> Tế bào liên kết chặt chẽ, ít cấu trúc gian bào nhưng biệt hóa để tổng hợp và chế tiết sản phẩm đặc hiệu; chia thành <strong>tuyến ngoại tiết</strong> (có ống dẫn đổ ra ngoài/khoang) và <strong>tuyến nội tiết</strong> (không ống dẫn, đổ hormon thẳng vào máu).</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Chức năng (tr. 31)</th>
                  <th>Cơ chế &amp; Ví dụ Chuẩn Giáo trình</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Bảo vệ</strong></td>
                  <td>Biểu mô lát tầng sừng hóa ở da giúp chống thấm nước, chống bốc hơi nước bên trong cơ thể nhờ lớp tế bào bề mặt hóa sừng và bảo vệ chống va chạm cơ học.</td>
                </tr>
                <tr>
                  <td><strong>2. Hấp thu, tái hấp thu</strong></td>
                  <td>Biểu mô vuông đơn ở ống thận tái hấp thu mạnh tạo nước tiểu; biểu mô trụ đơn ở ruột hấp thu dinh dưỡng nhờ các <strong>vi nhung mao</strong>.</td>
                </tr>
                <tr>
                  <td><strong>3. Chế tiết</strong></td>
                  <td>Tế bào đài ở ruột tiết nhầy tạo phân nhờ tính kết dính; tuyến bã tiết chất nhờn giữ ẩm da; tuyến mồ hôi giúp thải nhiệt.</td>
                </tr>
                <tr>
                  <td><strong>4. Vận chuyển</strong></td>
                  <td>Các <strong>lông chuyển</strong> trên bề mặt biểu mô đường hô hấp quét chất bụi từ đường thở ra môi trường ngoài.</td>
                </tr>
                <tr>
                  <td><strong>5. Thu nhận cảm giác</strong></td>
                  <td>Không có mạch máu nhưng có đầu tận thần kinh giúp thu nhận cảm giác nóng, lạnh, đau...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔗 3. Sáu Loại Liên kết giữa các Tế bào Biểu mô (Mục V, tr. 31–32) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_25')">🖼️ Xem Hình 2.25</button></div>
        <p style="font-size:14px;margin-bottom:10px;">Các tế bào biểu mô gần nhau gắn kết rất chặt chẽ nhờ 6 cấu trúc liên kết từ cực ngọn xuống cực đáy:</p>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>STT &amp; Tên Liên kết</th>
                <th>Vị trí &amp; Siêu cấu trúc (Đúng thông số sách)</th>
                <th>Chức năng Sinh học</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Chất gắn (CAM)</strong><br/><em>Cell Adhesion Molecule</em></td>
                <td>Các phân tử kết dính tế bào nằm trong khoảng gian bào hẹp giữa các tế bào.</td>
                <td>Duy trì lực dính phân tử nền tảng giữa hai màng tế bào kề nhau.</td>
              </tr>
              <tr>
                <td><strong>2. Khớp mộng</strong><br/><em>(Liên kết thể mộng)</em></td>
                <td>Cấu trúc lồi lõm kiểu mộng – rãnh của hai màng tế bào khớp lồng vào nhau ở mặt bên.</td>
                <td>Chống trượt cơ học và tăng diện tích tiếp xúc giữa các tế bào lân cận.</td>
              </tr>
              <tr>
                <td><strong>3. Liên kết vòng bịt</strong><br/><em>(Tight junction)</em></td>
                <td>Vùng liên kết khít ở sát <strong>cực ngọn</strong>; hai màng tế bào như được "may lại" bởi các hàng phân tử protein.</td>
                <td>Ngăn cách khoang lòng ống với môi trường bên trong; <strong>không cho các đại phân tử và ion vượt qua</strong> kẽ gian bào.</td>
              </tr>
              <tr>
                <td><strong>4. Thể liên kết vòng</strong><br/><em>(Belt desmosome)</em></td>
                <td>Tạo thành một dải bao quanh chu vi tế bào ở phần <strong>cực ngọn</strong> (ngay dưới vòng bịt).</td>
                <td>Giữ vững và phân bố đều lực căng cơ học vòng quanh cực ngọn tế bào biểu mô.</td>
              </tr>
              <tr>
                <td><strong>5. Thể liên kết</strong><br/><em>(Desmosome)</em></td>
                <td>Dạng <strong>bầu dục (200–500 nm)</strong>; mỗi phía đối diện có tấm bào tương đặc với nhiều <strong>siêu sợi trương lực (siêu sợi keratin)</strong> xuyên qua màng đan vào nhau ở khoảng gian bào.</td>
                <td>Chịu lực xé, lực kéo rất mạnh (cực nhiều ở lớp gai biểu bì da – <em>Hình 2.8</em>).</td>
              </tr>
              <tr>
                <td><strong>6. Liên kết khe</strong><br/><em>(Gap junction)</em></td>
                <td>Vùng rộng đường kính <strong>~1000 nm</strong>; hai màng cách nhau <strong>2–3 nm</strong>; có phức hợp protein <strong>connexon</strong> tạo khe thông đóng mở.</td>
                <td>Cho phép chuyển ion và phân tử nhỏ có <strong>TLPT ≤ 2·10³ (2.000 Da)</strong> giữa hai tế bào; gặp ở <em>tất cả các mô</em>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧬 4. Biến đổi Cực Đỉnh &amp; Cực Đáy Tế bào Biểu mô (tr. 20–23)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Cấu trúc Biến đổi</th>
                <th>Vị trí / Hình ảnh KHV Quang học</th>
                <th>Siêu cấu trúc Điện tử &amp; Thành phần Protein</th>
                <th>Chức năng Chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vi nhung mao</strong><br/>(<em>Mâm khía</em> ở ruột non;<br/><em>Bờ bàn chải</em> ở ống thận)</td>
                <td>Cực đỉnh có đường viền gồm các khía dọc rất mảnh, đều đặn <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_6')">🖼️ Hình 2.6</button>.</td>
                <td>Nhánh bào tương đội màng tế bào lên; bên trong có <strong>sợi actin</strong> chạy dọc, cố định nhờ 4 protein: <strong>villin, fimbrin, fodrin, myosin</strong>; ngoài phủ lớp áo <strong>glycocalyx</strong>.</td>
                <td>Tăng mạnh diện tích bề mặt để <strong>hấp thu / tái hấp thu</strong> (không chủ động đập).</td>
              </tr>
              <tr>
                <td><strong>Lông giả (Stereocilia)</strong><br/>(Ống mào tinh)</td>
                <td>Nhánh dài, cong queo mọc từ cực đỉnh, có thể phân nhánh với nhau.</td>
                <td>Cấu tạo <strong>tương tự vi nhung mao</strong> (lõi sợi actin), <em>không có khả năng chuyển động</em>.</td>
                <td>Tăng diện tích trao đổi chất và hấp thu dịch ở ống mào tinh.</td>
              </tr>
              <tr>
                <td><strong>Lông chuyển (Cilia)</strong><br/>(Vòi trứng, đường hô hấp)</td>
                <td>Vạch dọc <strong>dày, dài, không đều và thưa hơn</strong> mâm khía.</td>
                <td>Cấu tạo gồm <strong>9 cặp siêu ống ngoại vi</strong> bao quanh trục trung tâm <em>(sách tr. 22 ghi 2 cặp siêu ống trung tâm; tài liệu Sinh học TB chuẩn mô tả 1 cặp / 2 ống đơn trung tâm = mô hình 9+2)</em>.</td>
                <td><strong>Chuyển động nhịp nhàng</strong> đẩy bụi nhầy (hô hấp) hoặc noãn/phôi (vòi trứng).</td>
              </tr>
              <tr>
                <td><strong>Giọt chất nhầy sáng</strong><br/>(BM dạ dày)</td>
                <td>Cực đỉnh phình chứa 1 giọt chất nhầy sáng đồng nhất.</td>
                <td>Bắt màu đỏ khi nhuộm <strong>P.A.S</strong> (do giàu glucid).</td>
                <td>Bảo vệ niêm mạc dạ dày không bị tổn thương do <strong>HCl</strong> tuyến môn vị/đáy vị.</td>
              </tr>
              <tr>
                <td><strong>Nếp gấp đáy (Mê đạo đáy)</strong><br/>(Ống bài xuất tuyến nước bọt, mồ hôi)</td>
                <td>Gặp ở lớp đáy biểu mô phủ vuông tầng (tr. 23).</td>
                <td>Màng bào tương cực đáy lõm sâu vào trong bào tương tạo mê đạo đáy.</td>
                <td>Tăng diện tích màng cực đáy → tăng cường trao đổi ion &amp; vận chuyển nước/chất.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Theo giáo trình Mô học Trần Công Toại, đặc điểm chung nào sau đây ĐÚNG với mọi biểu mô?",
        source: "Mô học Trần Công Toại – Bài Biểu mô (tr. 18, 30–31)",
        options: [
          "Tế bào liên kết chặt chẽ với nhau, rất ít hoặc không có cấu trúc gian bào, không có mạch máu và tựa trên màng đáy",
          "Tế bào nằm rời rạc trong chất căn bản phong phú giàu sợi collagen và chứa nhiều mao mạch dinh dưỡng",
          "Chỉ có nguồn gốc duy nhất từ ngoại bì phôi thai và hoàn toàn không có khả năng tái tạo ở người trưởng thành",
          "Không có đầu tận thần kinh cảm giác nên không tiếp nhận được cảm giác nóng, lạnh hay đau"
        ],
        answer: 0,
        explain: "Biểu mô gồm các tế bào liên kết chặt chẽ, hầu như không có cấu trúc gian bào, không có mạch máu (nuôi qua màng đáy nhờ thẩm thấu từ mô liên kết), có nguồn gốc từ cả 3 lá phôi (ngoại/nội/trung bì), tái tạo mạnh và đôi khi có đầu tận thần kinh phong phú."
      },
      {
        q: "Trong bào tương tế bào biểu mô chứa loại siêu sợi đặc trưng nào tạo nên khung bền vững và liên kết với thể liên kết (desmosome)?",
        source: "Mô học Trần Công Toại – Hình 2.1 & mục V (tr. 18, 32)",
        options: [
          "Siêu sợi keratin (còn gọi là siêu sợi trương lực)",
          "Siêu sợi myosin dày đặc trưng của mô cơ vân",
          "Sợi elastin và sợi lưới collagen týp III nội bào",
          "Các hạt keratohyalin và sắc tố hemosiderin"
        ],
        answer: 0,
        explain: "Hình 2.1 (tr. 18) và mục V (tr. 32) nêu rõ: bào tương tế bào biểu mô chứa siêu sợi keratin (còn gọi siêu sợi trương lực), gắn vào tấm bào tương đặc của desmosome và đan nối qua màng tế bào."
      },
      {
        q: "Cấu trúc liên kết nào nằm ở cực ngọn tế bào biểu mô có vai trò như được 'may lại' để ngăn không cho đại phân tử và ion vượt qua kẽ gian bào?",
        source: "Mô học Trần Công Toại – Mục V (tr. 31)",
        options: [
          "Liên kết vòng bịt (Tight junction)",
          "Liên kết khe (Gap junction)",
          "Thể liên kết (Desmosome)",
          "Khớp mộng (Liên kết thể mộng)"
        ],
        answer: 0,
        explain: "Liên kết vòng bịt (Tight junction) nằm ở cực ngọn, hai màng tế bào được may kín bởi các hàng phân tử protein giúp ngăn cách môi trường ngoài và chặn đại phân tử, ion lọt qua khe gian bào."
      },
      {
        q: "Thông số kích thước chuẩn của Thể liên kết (Desmosome) và Liên kết khe (Gap junction) lần lượt là bao nhiêu?",
        source: "Mô học Trần Công Toại – Mục V (tr. 32)",
        options: [
          "Desmosome bầu dục 200–500 nm; Gap junction rộng ~1000 nm, hai màng cách 2–3 nm, chuyển ion TLPT ≤ 2·10³",
          "Desmosome rộng 1000 nm; Gap junction bầu dục 20–50 nm, hai màng cách 20–30 nm",
          "Desmosome hình cầu 10 nm; Gap junction chỉ có ở biểu mô lát tầng sừng hóa",
          "Desmosome có connexon; Gap junction chứa siêu sợi keratin 64 nm"
        ],
        answer: 0,
        explain: "Trang 32 ghi rõ: Desmosome có dạng bầu dục (200–500 nm) gắn siêu sợi keratin; Gap junction là vùng rộng đường kính ~1000 nm, hai màng cách 2–3 nm, phức hợp connexon chuyển ion có trọng lượng phân tử 2·10³."
      },
      {
        q: "Vi nhung mao (tạo nên mâm khía ở ruột non và bờ bàn chải ở ống thận) được giữ cấu trúc kiên định nhờ sợi actin liên kết với nhóm protein nào?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 20–21)",
        options: [
          "Villin, fimbrin, fodrin và myosin (bề mặt phủ áo tế bào glycocalyx)",
          "Osteonectin, osteocalcin và hydroxyapatite",
          "Fibronectin, proteoglycan và elastin",
          "Connexon, keratin và keratohyalin"
        ],
        answer: 0,
        explain: "Trang 21: Vi nhung mao có các sợi actin chạy dọc bên trong, được cố định nhờ các protein villin, fimbrin, fodrin, myosin và bề mặt phủ lớp áo glycocalyx."
      },
      {
        q: "Điểm khác biệt cốt lõi giữa Lông giả ở ống mào tinh và Lông chuyển ở đường hô hấp / vòi trứng là gì?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 21–22)",
        options: [
          "Lông giả có cấu tạo như vi nhung mao và KHÔNG chuyển động được; lông chuyển có cấu trúc siêu ống (9 cặp ngoại vi) và có khả năng chuyển động",
          "Lông giả chứa 9 cặp siêu ống chuyển động mạnh; lông chuyển là nhánh actin bất động",
          "Lông giả chỉ gặp ở ống thận tạo bờ bàn chải; lông chuyển chỉ gặp ở ruột non tạo mâm khía",
          "Lông giả bắt màu đỏ PAS còn lông chuyển chỉ có ở biểu mô lát tầng"
        ],
        answer: 0,
        explain: "Trang 21–22: Lông giả (ống mào tinh) là nhánh dài cong queo có thể chia nhánh, cấu tạo như vi nhung mao nên KHÔNG chuyển động. Lông chuyển (vòi trứng, đường hô hấp) có 9 cặp siêu ống ngoại vi bao quanh trục trung tâm nên chuyển động được."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: PHÂN LOẠI BIỂU MÔ PHỦ (ĐƠN TẦNG, GIẢ TẦNG & ĐA TẦNG)
  // ========================================================================
  {
    id: 2,
    group: "I. BIỂU MÔ",
    title: "Bài 2: Phân loại Biểu mô Phủ (9 Loại Kinh điển)",
    shortTitle: "Phân loại Biểu mô Phủ",
    textbookRef: "Mô học Trần Công Toại – Mục II. Biểu mô phủ (tr. 19–25, 32)",
    summary: "Hai tiêu chí phân loại biểu mô phủ (số lớp tế bào & hình dạng tế bào lớp nông nhất); phân tích chi tiết 4 loại biểu mô đơn và 5 loại biểu mô tầng kèm vị trí giải phẫu và đặc điểm nhận diện vi thể.",
    simId: "sim_covering_epi",
    simTitle: "Kính Hiển vi Tương tác: Soi & Phân loại 9 Loại Biểu mô Phủ",
    theoryHtml: `
      <div class="card">
        <div class="card-title">🧭 1. Nguyên tắc Phân loại Biểu mô Phủ (tr. 19–20) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_3')">🖼️ Xem Hình 2.3</button></div>
        <p style="font-size:14.5px;margin-bottom:10px;">Biểu mô phủ được phân loại dựa vào <strong>2 tiêu chí</strong>:</p>
        <ul class="theory-list">
          <li><strong>Theo số lượng lớp tế bào:</strong> Biểu mô phủ <strong>đơn tầng</strong> (chỉ có 1 lớp tế bào) và biểu mô phủ <strong>đa tầng</strong> (nhiều lớp tế bào).</li>
          <li><strong>Theo hình dạng tế bào ở LỚP NÔNG NHẤT (bề mặt):</strong> Biểu mô <strong>lát</strong> (tế bào dẹt, mỏng), biểu mô <strong>vuông</strong> (khối vuông) và biểu mô <strong>trụ</strong> (khối chữ nhật cao hơn rộng).</li>
        </ul>
        <div class="callout pearl">
          <div class="callout-title">🔑 Quy tắc định danh sống còn</div>
          <p>Với biểu mô nhiều tầng (ví dụ lát tầng, trụ tầng, vuông tầng), hình dạng của lớp đáy thường là khối vuông để sinh sản, nhưng <strong>tên gọi biểu mô LUÔN lấy theo hình dạng tế bào của lớp nông nhất tiếp xúc lòng khoang/bề mặt</strong>!</p>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔬 2. Nhóm Biểu mô Phủ Đơn (4 Loại – tr. 20–22)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Loại Biểu mô Đơn</th>
                <th>Đặc điểm Hình thái Vi thể</th>
                <th>Vị trí Kinh điển &amp; Thuật ngữ Đặc biệt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Biểu mô lát đơn</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_4')">🖼️ Hình 2.4</button></td>
                <td>1 lớp tế bào hình đa diện, dẹt, bờ không đều; vùng trung tâm mỗi tế bào có 1 nhân dẹt hơi lồi vào lòng khoang.</td>
                <td>
                  • Lá ngoài <strong>bao Bowman</strong>, đoạn lên <strong>quai Henlé</strong>.<br/>
                  • <strong>Trung biểu mô:</strong> Lợp màng bụng, màng phổi, màng tim (nguồn gốc trung mô).<br/>
                  • <strong>Nội mô:</strong> Lợp mặt trong các thành mạch máu (nguồn gốc trung mô).
                </td>
              </tr>
              <tr>
                <td><strong>2. Biểu mô vuông đơn</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_5')">🖼️ Hình 2.5</button></td>
                <td>1 lớp tế bào hình khối vuông (chiều cao ≈ chiều rộng), nhân tròn nằm giữa tế bào.</td>
                <td>Nhiều ống bài xuất của các tuyến, ống thận (hấp thu – tái hấp thu mạnh).</td>
              </tr>
              <tr>
                <td><strong>3. Biểu mô trụ đơn</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_6')">🖼️ Hình 2.6</button></td>
                <td>1 lớp tế bào cao nhiều hơn rộng; cực đáy tựa màng đáy, cực đỉnh hướng vào lòng ống (có thể không biến đổi hoặc mang 4 dạng biến đổi cực đỉnh).</td>
                <td>
                  • <em>Chứa 1 giọt chất nhầy sáng:</em> Mặt trong <strong>dạ dày</strong> (chống HCl tuyến môn vị).<br/>
                  • <em>Vi nhung mao:</em> <strong>Ruột non</strong> (mâm khía – hấp thu thức ăn), ống thận (bờ bàn chải).<br/>
                  • <em>Lông giả:</em> <strong>Ống mào tinh</strong> (tăng trao đổi chất, không động).<br/>
                  • <em>Lông chuyển:</em> <strong>Vòi trứng</strong> (đẩy noãn/phôi).
                </td>
              </tr>
              <tr>
                <td><strong>4. Biểu mô trụ giả tầng có lông chuyển</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_7')">🖼️ Hình 2.7</button></td>
                <td><strong>Thực chất là biểu mô phủ ĐƠN TẦNG!</strong> Các tế bào trụ hình dáng khúc khuỷu cài xen nhau, cộng thêm tế bào dự trữ kích thước nhỏ ở đáy và tế bào đài tiết nhầy; nhân nằm ở các độ cao khác nhau tạo cảm giác giả đa tầng. <strong>MỌI tế bào đều có cực đáy tựa chung trên 1 màng đáy</strong>.</td>
                <td>Đặc trưng của <strong>đường hô hấp</strong> (khí quản, phế quản).<br/><em>Câu tự lượng giá 3 (tr. 32): Điểm đúng về BM trụ giả tầng là "Tất cả tế bào đều tựa trên màng đáy"!</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧱 3. Nhóm Biểu mô Phủ Đa tầng (5 Loại – tr. 22–25)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Loại Biểu mô Tầng</th>
                <th>Cấu trúc Từng lớp từ Đáy → Bề mặt</th>
                <th>Vị trí &amp; Điểm So sánh Quyết định</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>5. Biểu mô lát tầng sừng hóa</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_8')">🖼️ Hình 2.8</button></td>
                <td>Gồm đủ <strong>5 lớp</strong> từ cực đáy lên cực đỉnh:<br/>
                  1) <strong>Lớp đáy:</strong> 1 hàng TB khối vuông tựa màng đáy (lớp sinh sản tái tạo biểu mô).<br/>
                  2) <strong>Lớp gai:</strong> Nhiều hàng TB đa diện nối nhau bằng các thể liên kết dạng gai.<br/>
                  3) <strong>Lớp hạt:</strong> TB chứa hạt ưa baz trong bào tương gọi là <strong>hạt keratohyalin</strong>.<br/>
                  4) <strong>Lớp bóng:</strong> TB chết chứa <strong>hạt eleidin</strong> (kết hợp protein tơ trương lực + hạt keratohyalin).<br/>
                  5) <strong>Lớp sừng:</strong> Các tế bào chết, mất nhân và hóa sừng hoàn toàn.
                </td>
                <td><strong>Chỉ gặp ở da!</strong> (Biểu bì da giúp chống thấm nước, chống bốc hơi nước và chống va chạm cơ học).</td>
              </tr>
              <tr>
                <td><strong>6. Biểu mô lát tầng không sừng hóa</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_9')">🖼️ Hình 2.9</button></td>
                <td>Gồm lớp đáy (TB khối vuông sinh sản), nhiều lớp trung gian (TB đa diện nhân lớn) và các lớp bề mặt (TB dẹt bong tróc dần nhưng <strong>VẪN CÒN NHÂN</strong> và không hóa sừng).</td>
                <td>Lót trong <strong>miệng, thực quản, âm đạo</strong>.<br/><em>Câu tự lượng giá 1 (tr. 32): Khác với loại sừng hóa ở chỗ <strong>KHÔNG có lớp hạt</strong> (và lớp bóng/sừng).</em></td>
              </tr>
              <tr>
                <td><strong>7. Biểu mô phủ vuông tầng</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_10')">🖼️ Hình 2.10</button></td>
                <td>Nhiều lớp TB hình khối vuông giới hạn lòng ống hẹp; lớp đáy thường có <strong>nếp gấp đáy (mê đạo đáy)</strong> làm tăng mạnh diện tích trao đổi chất.</td>
                <td>Ống bài xuất của một số tuyến như <strong>tuyến nước bọt, tuyến mồ hôi</strong>.</td>
              </tr>
              <tr>
                <td><strong>8. Biểu mô phủ trụ tầng</strong><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_10')">🖼️ Hình 2.10</button></td>
                <td>1 hoặc 2 lớp TB khối vuông ở dưới + 1 lớp TB hình trụ ở bề mặt; trong lòng ống có thể thấy chất nhầy hoặc sản phẩm chế tiết.</td>
                <td>Các <strong>ống bài xuất có đường kính lớn</strong>.</td>
              </tr>
              <tr>
                <td><strong>9. Biểu mô niệu</strong><br/><em>(Đa dạng tầng / Trung gian tầng)</em><br/><button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_11')">🖼️ Hình 2.11</button></td>
                <td>• <strong>Lớp đáy:</strong> TB khối vuông tựa màng đáy (không liên tục và đều đặn).<br/>• <strong>Lớp trung gian:</strong> 1–2 lớp <strong>tế bào hình vợt</strong> có trục dọc vuông góc với bề mặt.<br/>• <strong>Lớp bề mặt:</strong> Tế bào rất lớn, cực đáy bị ấn lõm bởi các TB bên dưới; bị <strong>ép dẹt</strong> khi ống dẫn tiểu căng đầy.</td>
                <td><strong>Chỉ gặp trong các đường dẫn tiểu</strong> (đài bể thận, niệu quản, bàng quang).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout trap">
          <div class="callout-title">🎯 Giải mã 3 Câu Tự lượng giá (tr. 32)</div>
          <ul>
            <li><strong>Câu 1 (Đáp án C):</strong> Biểu mô lát tầng không sừng hóa khác biểu mô lát tầng sừng hóa ở chỗ <strong>Không có lớp hạt</strong> (nhớ: không sừng thì mất lớp hạt, lớp bóng, lớp sừng).</li>
            <li><strong>Câu 2 (Đáp án A):</strong> Biểu mô trụ đơn <strong>có nhiều ở nơi hấp thu thức ăn</strong> (ruột non – mâm khía vi nhung mao; chứ không phải nơi trao đổi khí là lát đơn phế nang, vẫn phân cực mạnh, tái tạo mạnh).</li>
            <li><strong>Câu 3 (Đáp án C):</strong> Ở biểu mô trụ giả tầng, <strong>tất cả tế bào đều tựa trên màng đáy</strong> (nhân không nằm cùng hàng, tế bào dự trữ cực ngọn không chạm lòng ống, lót đường hô hấp nguồn gốc nội bì).</li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Biểu mô lát tầng không sừng hoá khác với biểu mô lát tầng sừng hoá ở chỗ nào?",
        source: "Mô học Trần Công Toại – Chương Biểu mô, Câu tự lượng giá 1 (tr. 32)",
        options: [
          "Không có lớp hạt",
          "Không phân cực",
          "Không có mạch máu",
          "Có màng đáy dày",
          "Có nhiều thể liên kết"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 32): 1.C – Không có lớp hạt. Biểu mô lát tầng sừng hóa ở da có đủ 5 lớp (đáy, gai, hạt, bóng, sừng), trong khi biểu mô lát tầng không sừng hóa (miệng, thực quản, âm đạo) không có lớp hạt, lớp bóng, lớp sừng và tế bào bề mặt vẫn còn nhân."
      },
      {
        q: "Phát biểu nào sau đây ĐÚNG về biểu mô trụ đơn?",
        source: "Mô học Trần Công Toại – Chương Biểu mô, Câu tự lượng giá 2 (tr. 32)",
        options: [
          "Có nhiều ở nơi có hấp thu thức ăn",
          "Có nhiều ở nơi trao đổi khí",
          "Không có tính phân cực",
          "Kém khả năng sinh sản",
          "Tất cả đều sai"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 32): 2.A – Có nhiều ở nơi có hấp thu thức ăn (điển hình là ruột non với cực đỉnh có vi nhung mao tạo mâm khía). Nơi trao đổi khí là biểu mô lát đơn."
      },
      {
        q: "Ở biểu mô trụ giả tầng có lông chuyển, đặc điểm cấu tạo nào sau đây là CHÍNH XÁC?",
        source: "Mô học Trần Công Toại – Chương Biểu mô, Câu tự lượng giá 3 (tr. 32)",
        options: [
          "Tất cả tế bào đều tựa trên màng đáy",
          "Các nhân nằm cùng hàng",
          "Mọi tế bào đều có cực ngọn tiếp xúc lòng ống",
          "Luôn có nguồn gốc ngoại bì phôi",
          "Tất cả đều đúng"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 32): 3.C – Tất cả tế bào đều tựa trên màng đáy. Dù nhân nằm ở các độ cao khác nhau và tế bào dự trữ nhỏ không vươn tới lòng ống, bản chất đây vẫn là biểu mô đơn tầng."
      },
      {
        q: "Thuật ngữ 'Trung biểu mô' và 'Nội mô' thực chất đều là biểu mô lát đơn có nguồn gốc từ trung mô, lót ở vị trí nào?",
        source: "Mô học Trần Công Toại – Mục II.1 (tr. 20)",
        options: [
          "Trung biểu mô lợp màng bụng, màng phổi, màng tim; Nội mô lợp mặt trong các thành mạch máu",
          "Trung biểu mô lợp ống thận; Nội mô lợp bề mặt da",
          "Trung biểu mô lợp ruột non; Nội mô lợp khí quản",
          "Trung biểu mô lợp bàng quang; Nội mô lợp bao Bowman"
        ],
        answer: 0,
        explain: "Trang 20: Màng bụng, màng phổi, màng tim được lợp bởi biểu mô lát đơn nguồn gốc trung mô gọi là trung biểu mô; mặt trong thành mạch máu được lợp bởi biểu mô lát đơn nguồn gốc trung mô gọi là nội mô."
      },
      {
        q: "Trong biểu mô lát tầng sừng hóa ở da, lớp hạt và lớp bóng đặc trưng bởi hai loại hạt nào trong bào tương?",
        source: "Mô học Trần Công Toại – Mục II.5 (tr. 22)",
        options: [
          "Lớp hạt chứa hạt keratohyalin ưa baz; lớp bóng chứa hạt eleidin (do tơ trương lực kết hợp keratohyalin)",
          "Lớp hạt chứa hạt hemosiderin; lớp bóng chứa giọt lipid trung tính",
          "Lớp hạt chứa hạt zymogen tiết nước; lớp bóng chứa chất nhầy PAS dương tính",
          "Lớp hạt chứa melanin từ tế bào đáy; lớp bóng chứa sợi collagen týp I"
        ],
        answer: 0,
        explain: "Trang 22: Lớp hạt chứa các hạt ưa baz trong bào tương gọi là hạt keratohyalin; lớp bóng gồm tế bào đã chết chứa các hạt eleidin do sự kết hợp giữa protein của tơ trương lực và hạt keratohyalin."
      },
      {
        q: "Trong biểu mô niệu (biểu mô đa dạng tầng ở đường dẫn tiểu), lớp trung gian và lớp bề mặt có hình thái đặc trưng nào?",
        source: "Mô học Trần Công Toại – Mục II.9 (tr. 23–24)",
        options: [
          "Lớp trung gian gồm 1–2 lớp tế bào hình vợt; lớp bề mặt gồm tế bào rất lớn có cực đáy bị ấn lõm và ép dẹt khi căng đầy",
          "Lớp trung gian là tế bào trụ lông chuyển; lớp bề mặt hóa sừng mất nhân",
          "Lớp trung gian có nếp gấp mê đạo đáy; lớp bề mặt có bờ bàn chải",
          "Lớp trung gian chứa tế bào đài tiết nhầy; lớp bề mặt có lông giả"
        ],
        answer: 0,
        explain: "Trang 23–24 (Hình 2.11): Biểu mô niệu chỉ gặp ở đường dẫn tiểu, lớp trung gian có 1–2 hàng tế bào hình vợt trục dọc vuông góc bề mặt, lớp bề mặt tế bào rất lớn có cực đáy bị ấn lõm bởi tế bào dưới và dẹt lại khi bàng quang căng đầy."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: BIỂU MÔ TUYẾN (NGOẠI TIẾT, KIỂU CHẾ TIẾT & NỘI TIẾT)
  // ========================================================================
  {
    id: 3,
    group: "I. BIỂU MÔ",
    title: "Bài 3: Biểu mô Tuyến (Ngoại tiết, Kiểu Chế tiết & Nội tiết)",
    shortTitle: "Biểu mô Tuyến Ngoại & Nội tiết",
    textbookRef: "Mô học Trần Công Toại – Mục III. Biểu mô tuyến (tr. 19, 24–30)",
    summary: "Phân biệt tuyến ngoại tiết và nội tiết; bản chất hóa học sản phẩm tiết (nhầy PAS+ vs nước); 5 dạng tuyến ngoại tiết (biệt lập, lá, trong biểu mô, 4 dạng tuyến ống, tuyến túi & liềm Gianuzzi); 3 kiểu chế tiết; và 3 dạng tuyến nội tiết.",
    simId: "sim_glands",
    simTitle: "Phòng Lab Phân loại Biểu mô Tuyến: Hình thái – Chất tiết – Kiểu Chế tiết",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧪 1. Bản chất Chế tiết &amp; Tuyến Ngoại tiết vs Nội tiết</div>
          <ul class="theory-list">
            <li><strong>Sự chế tiết là gì? (tr. 24):</strong> Tế bào tuyến hấp thụ phân tử nhỏ từ máu, dùng bộ máy sinh tổng hợp nội bào biến đổi thành sản phẩm phức tạp hơn rồi bài xuất ra khỏi tế bào.</li>
            <li><strong>Bản chất sản phẩm chế tiết:</strong>
              <ul>
                <li><strong>Protein:</strong> Tuyến tụy.</li>
                <li><strong>Lipid:</strong> Tuyến thượng thận vỏ, tuyến bã.</li>
                <li><strong>Phức hợp protein – hydrat cacbon:</strong> Tuyến nước bọt.</li>
                <li><strong>Cả 3 loại (protein, lipid, hydrat cacbon):</strong> <strong>Tuyến sữa</strong>!</li>
              </ul>
            </li>
            <li><strong>So sánh 2 nhóm lớn <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_2')">🖼️ Hình 2.2</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_12')">🖼️ Hình 2.12</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_24')">🖼️ Hình 2.24</button>:</strong>
              <ul>
                <li><strong>Tuyến ngoại tiết:</strong> Có <strong>ống dẫn (phần bài xuất)</strong> đổ ra khoang cơ thể hoặc môi trường ngoài; tế bào phần chế tiết có <strong>tính phân cực rõ rệt</strong> (cực đỉnh hướng ra ngoài chứa chất chế tiết, cực đáy chứa nhân và bào quan).</li>
                <li><strong>Tuyến nội tiết:</strong> Trong phát triển phôi, mối liên hệ với biểu mô phủ mất đi → <strong>không có ống bài xuất</strong>; tiếp xúc chặt chẽ với <strong>mao mạch</strong> để đổ thẳng <strong>hormon</strong> vào tuần hoàn máu tác động ở nồng độ rất thấp lên tế bào đích xa; tế bào <strong>không phân cực rõ rệt</strong>, nhân nằm giữa.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🎨 2. Tuyến Tiết nhầy vs Tuyến Tiết nước &amp; Nang Pha <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_13')">🖼️ Hình 2.13</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_21')">🖼️ Hình 2.21</button></div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tiêu chí So sánh</th>
                  <th>Tế bào / Nang Tiết Nhầy</th>
                  <th>Tế bào / Nang Tiết Nước</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hình dạng tế bào nang</strong></td>
                  <td>Hình tháp.</td>
                  <td>Hình tháp.</td>
                </tr>
                <tr>
                  <td><strong>Cực đỉnh &amp; Bắt màu</strong></td>
                  <td>Chứa các <strong>giọt chất nhầy sáng</strong> (ít bắt màu khi nhuộm H&amp;E thông thường); bắt màu <strong>đỏ rõ rệt với kỹ thuật P.A.S</strong> (<em>Periodic Acid Schiff</em>) do giàu glucid.</td>
                  <td>Cực đỉnh có <strong>dạng hạt</strong> do chứa nhiều <strong>hạt chế tiết</strong> (số lượng và kích thước thay đổi theo loại TB &amp; trạng thái hoạt động).</td>
                </tr>
                <tr>
                  <td><strong>Nhân &amp; Cực đáy</strong></td>
                  <td>Nếu nhiều chất nhầy → <strong>nhân bị ép dẹt nằm sát cực đáy</strong>; nếu ít nhầy → nhân còn tròn hoặc bầu dục.</td>
                  <td><strong>Nhân tròn</strong> (lệch về cực đáy nhưng không dẹt), nằm trong vùng bào tương <strong>ái kiềm</strong> ở cực đáy.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout formula">
            <div class="callout-title">🌙 Nang Pha &amp; Liềm Gianuzzi (tr. 29)</div>
            <p>Gặp ở một số tuyến nước bọt: thành nang <strong>chủ yếu</strong> tạo bởi các tế bào tiết nhầy, còn các tế bào tiết nước liên kết thành <strong>liềm hình bán nguyệt ôm ngoài</strong> gọi là <strong>liềm Gianuzzi</strong>.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🏗️ 3. Năm Nhóm Tuyến Ngoại tiết Theo Cấu trúc (tr. 25–28)</div>
        <p style="font-size:14px;margin-bottom:8px;">Ba loại đầu tiên nằm ngay <em>trong biểu mô phủ</em> và tạo bởi tế bào tiết nhầy; hai loại sau lõm sâu xuống mô đệm:</p>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Nhóm Tuyến Ngoại tiết</th>
                <th>Cấu tạo &amp; Phân loại Chi tiết</th>
                <th>Ví dụ &amp; Hình Minh họa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1.1 Tế bào tuyến biệt lập</strong></td>
                <td>Loại đơn giản nhất: TB tiết nhầy nằm rải rác trong BM phủ trụ đơn; cực đỉnh phình to giống đài hoa → gọi là <strong>tế bào đài</strong>; cực đáy hẹp chứa nhân đậm.</td>
                <td>Tế bào đài ở ruột non, ruột già, đường hô hấp <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_14')">🖼️ Hình 2.14</button>.</td>
              </tr>
              <tr>
                <td><strong>1.2 Lá tuyến</strong></td>
                <td>Khi TẤT CẢ tế bào của biểu mô phủ trụ đơn đều biệt hóa thành tế bào tiết nhầy → tạo thành một lá tuyến.</td>
                <td>Niêm mạc <strong>dạ dày</strong> và <strong>cổ trong cổ tử cung</strong> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_14')">🖼️ Hình 2.14</button>.</td>
              </tr>
              <tr>
                <td><strong>1.3 Tuyến trong biểu mô</strong></td>
                <td><strong>Chỉ gặp trong biểu mô trụ giả tầng!</strong> Là chỗ lõm nhẹ trong biểu mô tập trung nhiều tế bào đài tiết nhầy xen ít TB trụ có lông chuyển.</td>
                <td>Niêm mạc đường hô hấp <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_15')">🖼️ Hình 2.15</button>.</td>
              </tr>
              <tr>
                <td><strong>1.4 Các tuyến ống</strong><br/><em>(4 dạng)</em></td>
                <td>
                  • <strong>Tuyến ống đơn (thẳng):</strong> BM phủ lõm sâu thành các ống thẳng song song, gồm 3 phần: <em>cổ tuyến, thân tuyến, đáy tuyến</em>.<br/>
                  • <strong>Tuyến ống chia nhánh:</strong> Nhiều ống ngắn ngoằn ngoèo thông nối với BM phủ qua <strong>một cổ tuyến chung</strong>.<br/>
                  • <strong>Tuyến ống phức tạp:</strong> Đầu trên thông với lòng ống tuyến Lieberkühn, đầu dưới <strong>phân nhánh nhiều lần</strong>.<br/>
                  • <strong>Tuyến ống cong queo:</strong> Phần bài xuất ống thẳng (<strong>BM vuông kép</strong>) nối bề mặt da với phần chế tiết là ống dài cuộn xoắn (<strong>1 lớp TB vuông nhân tròn, bào tương sáng</strong>).
                </td>
                <td>
                  • Ống đơn: <strong>Tuyến Lieberkühn</strong> ở ruột <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_17')">🖼️ H.2.17</button>.<br/>
                  • Chia nhánh: <strong>Tuyến môn vị</strong> dạ dày.<br/>
                  • Phức tạp: <strong>Tuyến Brunner</strong> tá tràng <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_18')">🖼️ H.2.18</button>.<br/>
                  • Cong queo: <strong>Tuyến mồ hôi</strong> ở da <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_19')">🖼️ H.2.19</button> &amp; <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_16')">🖼️ H.2.16</button>.
                </td>
              </tr>
              <tr>
                <td><strong>1.5 Tuyến túi (Nang)</strong><br/><em>(Đơn vs Phức tạp)</em></td>
                <td>
                  • <strong>Tuyến túi đơn:</strong> Ống bài xuất KHÔNG phân nhánh nối với một hay nhiều nang tuyến.<br/>
                  • <strong>Tuyến túi phức tạp:</strong> Ống bài xuất phân nhánh như cành cây, đầu dưới mỗi nhánh nối nhiều nang chế tiết (gồm nang nước, nang nhầy, nang pha).
                </td>
                <td>Tuyến bã (túi đơn/chia nhánh), tuyến nước bọt – tụy ngoại tiết (túi phức tạp) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_20')">🖼️ H.2.20</button>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">💧 4. Ba Kiểu Chế tiết Ngoại tiết (tr. 29–30) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_22')">🖼️ Hình 2.22</button> <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_23')">🖼️ Hình 2.23</button></div>
          <ul class="theory-list">
            <li><strong>1. Kiểu chế tiết toàn vẹn (Merocrine):</strong> Chế tiết liên tục, sản phẩm được sản xuất và xuất bào từ từ nên <strong>KHÔNG làm thay đổi cấu trúc tế bào</strong> (tế bào giữ nguyên vẹn). Ví dụ: <strong>các nang tuyến tụy</strong>.</li>
            <li><strong>2. Kiểu chế tiết bán hủy (Apocrine):</strong> Chế tiết không liên tục; chất chế tiết tập trung tại cực đỉnh rồi được tiết ra thành từng khối lớn <strong>cùng với một phần bào tương của cực đỉnh tế bào</strong>. Ví dụ: <strong>tuyến vú</strong>, một số <strong>tuyến mồ hôi ở nách</strong>.</li>
            <li><strong>3. Kiểu chế tiết toàn hủy (Holocrine):</strong> Toàn bộ tế bào tích đầy chất tiết rồi <strong>vỡ biến thành chất chế tiết</strong> thải ra ngoài; vùng đáy có tế bào gốc gián phân thay thế. Ví dụ: <strong>tuyến bã ở da</strong>.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🩸 5. Tuyến Nội tiết &amp; 3 Dạng Sắp xếp Tế bào (tr. 29–30) <button class="fig-ref-chip" type="button" onclick="App.jumpToFigure('h_2_24')">🖼️ Hình 2.24</button></div>
          <ul class="theory-list">
            <li><strong>Đặc điểm tế bào theo bản chất hormon (tr. 30):</strong>
              <ul>
                <li>Hormon bản chất <strong>protein</strong> → tế bào có <strong>bào tương dạng hạt</strong>.</li>
                <li>Hormon bản chất <strong>lipid</strong> → bào tương chứa <strong>nhiều không bào nhỏ, kích thước đồng đều</strong> (do lipid tan mất khi xử lý tiêu bản thường).</li>
              </ul>
            </li>
            <li><strong>3 loại tuyến nội tiết theo sắp xếp tế bào:</strong>
              <ol>
                <li><strong>Các tế bào tuyến nội tiết biệt lập:</strong> Hiện diện nhiều trong ống tiêu hóa (ví dụ trong các tuyến Lieberkühn); sản phẩm chế tiết có ái tính cao với muối nitrat bạc → phát hiện dễ dàng bằng <strong>kỹ thuật nhuộm bạc</strong> (tế bào ưa bạc).</li>
                <li><strong>Đám tế bào tuyến:</strong> Liên kết thành từng đám nhỏ nằm xen bên trong một mô khác (VD: tiểu đảo tụy, đám tế bào Leydig).</li>
                <li><strong>Cơ quan nội tiết:</strong> Tế bào liên kết thành từng lá/dây biểu mô với bề mặt tự do tiếp xúc chặt chẽ với các mao mạch (VD: tuyến yên, thượng thận, tuyến giáp).</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tuyến ngoại tiết nào sau đây có khả năng tổng hợp và chế tiết CẢ BA loại chất: protein, lipid và hydrat cacbon?",
        source: "Mô học Trần Công Toại – Mục III.1 (tr. 24)",
        options: [
          "Tuyến sữa",
          "Tuyến tụy ngoại tiết",
          "Tuyến bã ở da",
          "Tuyến nước bọt mang tai"
        ],
        answer: 0,
        explain: "Trang 24 ghi rõ: chất chế tiết có thể là protein (tuyến tụy), lipid (thượng thận vỏ, tuyến bã), phức hợp protein-hydrat cacbon (tuyến nước bọt), và RIÊNG TUYẾN SỮA có khả năng tiết cả ba loại: protein, lipid, hydrat cacbon."
      },
      {
        q: "Kỹ thuật nhuộm đặc biệt nào được dùng để thấy rõ chất nhầy trong tế bào tuyến nhầy (nhờ ái tính cao với phân tử glucid)?",
        source: "Mô học Trần Công Toại – Mục III.1 & Hình 2.13 (tr. 25–26)",
        options: [
          "Kỹ thuật nhuộm P.A.S (Periodic Acid Schiff) cho màu đỏ",
          "Kỹ thuật ngấm bạc bằng nitrat bạc cho màu đen",
          "Kỹ thuật nhuộm aldehyde fuchsin cho màu tím",
          "Kỹ thuật nhuộm sống bằng xanh trypan"
        ],
        answer: 0,
        explain: "Trang 25 & Hình 2.13: Chất nhầy chứa nhiều glucid nên ít bắt màu thuốc nhuộm H&E thông thường nhưng bắt màu đỏ rõ khi dùng kỹ thuật nhuộm P.A.S (Periodic Acid Schiff)."
      },
      {
        q: "Trong nang pha của một số tuyến nước bọt, cấu trúc 'liềm Gianuzzi' được tạo thành bởi thành phần nào?",
        source: "Mô học Trần Công Toại – Mục III.1.5 & Hình 2.21 (tr. 29)",
        options: [
          "Các tế bào tiết nước liên kết thành hình bán nguyệt bao quanh các tế bào tiết nhầy ở giữa",
          "Các tế bào tiết nhầy ép dẹt thành hình bán nguyệt bao quanh tế bào tiết nước",
          "Lớp tế bào cơ – biểu mô co bóp ở mặt đáy tuyến mồ hôi",
          "Màng đáy dày đặc ngấm muối nitrat bạc bao quanh tuyến Lieberkühn"
        ],
        answer: 0,
        explain: "Trang 29: Nang pha có thành nang chủ yếu tạo bởi tế bào tiết nhầy; các tế bào tiết nước liên kết thành các liềm hình bán nguyệt bao quanh các tế bào tiết nhầy gọi là liềm Gianuzzi."
      },
      {
        q: "Trong phân loại 5 nhóm tuyến ngoại tiết, 'Tuyến trong biểu mô' chỉ gặp ở loại biểu mô nào?",
        source: "Mô học Trần Công Toại – Mục III.1.3 (tr. 25)",
        options: [
          "Biểu mô trụ giả tầng",
          "Biểu mô lát tầng sừng hóa",
          "Biểu mô lát đơn nội mô",
          "Biểu mô vuông đơn ống thận"
        ],
        answer: 0,
        explain: "Trang 25 (mục 1.3): Tuyến trong biểu mô CHỈ gặp trong biểu mô trụ giả tầng; là một chỗ lõm nhẹ trong biểu mô tập trung nhiều tế bào đài tiết nhầy và một ít tế bào trụ có lông chuyển."
      },
      {
        q: "Đoạn nào sau đây phân biệt ĐÚNG phần bài xuất và phần chế tiết của tuyến mồ hôi (tuyến ống cong queo ở da)?",
        source: "Mô học Trần Công Toại – Mục III.1.4 & Hình 2.19 (tr. 28)",
        options: [
          "Phần bài xuất là ống thẳng lót bởi biểu mô vuông kép; phần chế tiết là ống dài cong queo tạo bởi 1 lớp tế bào vuông nhân tròn bào tương sáng",
          "Phần bài xuất lót bởi biểu mô lát đơn; phần chế tiết là biểu mô lát tầng không sừng",
          "Cả hai phần đều tạo bởi tế bào hình tháp tiết nhầy PAS dương tính",
          "Phần chế tiết thông trực tiếp với nang lông kiểu toàn hủy"
        ],
        answer: 0,
        explain: "Trang 28: Tuyến mồ hôi gồm phần bài xuất là ống thẳng có thành là biểu mô vuông kép (2 tầng) và phần chế tiết là ống dài uốn lượn cong queo có thành tạo bởi 1 lớp tế bào vuông nhân tròn, bào tương sáng."
      },
      {
        q: "Khi quan sát một tuyến nội tiết có nhiệm vụ tổng hợp hormon bản chất LIPID, đặc điểm bào tương tế bào tuyến nào sau đây phù hợp nhất?",
        source: "Mô học Trần Công Toại – Mục III.2 (tr. 30)",
        options: [
          "Bào tương chứa nhiều không bào nhỏ, kích thước đồng đều (do lipid hòa tan khi xử lý tiêu bản)",
          "Cực đỉnh chứa nhiều hạt chế tiết protein đậm màu và nhân dẹt sát đáy",
          "Tế bào mất toàn bộ nhân và vỡ tan thải ra ống bài xuất kiểu toàn hủy",
          "Có vi nhung mao bờ bàn chải và nối vào ống Lieberkühn"
        ],
        answer: 0,
        explain: "Trang 30: Tế bào tuyến nội tiết không phân cực rõ, nhân nằm giữa. Khi hormon là protein → bào tương dạng hạt; khi hormon là lipid → bào tương chứa nhiều không bào nhỏ, kích thước đồng đều."
      }
    ]
  }
];
