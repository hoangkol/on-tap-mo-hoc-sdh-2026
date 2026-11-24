// ==========================================================================
// BỘ 8 PHÒNG THÍ NGHIỆM MÔ PHỎNG TƯƠNG TÁC MÔ HỌC SĐH YDS 2026
// Mỗi bài học có 1 Phòng Lab tương tác để thao tác thông số & biện luận
// ==========================================================================

window.Simulators = {
  render(simId, container) {
    if (!container) return;
    if (typeof this[simId] === "function") {
      this[simId](container);
    } else {
      container.innerHTML = `<div class="callout">Đang tải phòng mô phỏng...</div>`;
    }
  },

  // ========================================================================
  // LAB 1: SIÊU CẤU TRÚC BIỂU MÔ & KIỂM ĐỊNH 6 LIÊN KẾT TẾ BÀO
  // ========================================================================
  sim_epi_junctions(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Cấu trúc Biểu mô Khảo sát:</label>
          <select id="l1_struct" onchange="Simulators.upd_l1()">
            <option value="tight">1. Liên kết vòng bịt (Tight junction)</option>
            <option value="belt">2. Thể liên kết vòng (Belt desmosome)</option>
            <option value="desmo">3. Thể liên kết (Desmosome)</option>
            <option value="interdig">4. Khớp mộng (Liên kết thể mộng)</option>
            <option value="gap">5. Liên kết khe (Gap junction)</option>
            <option value="cam">6. Chất gắn CAM (Cell Adhesion Molecule)</option>
            <option value="microvilli">7. Vi nhung mao (Mâm khía / Bờ bàn chải)</option>
            <option value="stereocilia">8. Lông giả (Ống mào tinh)</option>
            <option value="cilia">9. Lông chuyển (Đường hô hấp / Vòi trứng)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Thử nghiệm Thấm / Tác động Cơ học:</label>
          <select id="l1_test" onchange="Simulators.upd_l1()">
            <option value="ion">Cho ion nhỏ (≤ 2·10³ Da) truyền giữa 2 bào tương</option>
            <option value="paracellular">Cho đại phân tử lọt qua kẽ gian bào từ cực ngọn</option>
            <option value="shear">Kéo căng / Lực xé mạnh trên biểu bì da</option>
          </select>
        </div>
      </div>
      <div id="l1_out"></div>
    `;
    this.upd_l1();
  },
  upd_l1() {
    const s = document.getElementById("l1_struct").value;
    const t = document.getElementById("l1_test").value;
    const data = {
      tight: { pos: "Cực ngọn", size: "Hàng phân tử protein may kín 2 màng", role: "Ngăn cách khoang ngoài, KHÔNG cho đại phân tử và ion vượt qua khe gian bào.", passIon: "Chặn hoàn toàn đường kẽ gian bào", passPara: "CHẶN ĐỨNG (hàng rào kín tuyệt đối)" },
      belt: { pos: "Cực ngọn (dưới vòng bịt)", size: "Dải vòng quanh chu vi tế bào", role: "Giữ ổn định và phân bố lực căng cơ học vòng quanh cực ngọn tế bào.", passIon: "Không tạo kênh truyền bào tương", passPara: "Hỗ trợ cơ học quanh vòng ngọn" },
      desmo: { pos: "Mặt bên (nhiều ở lớp gai da)", size: "Bầu dục 200–500 nm + siêu sợi keratin", role: "Neo giữ siêu sợi trương lực (keratin) xuyên màng đan chéo giúp chống lực xé cực mạnh.", passIon: "Không dẫn truyền ion", passPara: "Chịu lực xé cơ học rất cao" },
      interdig: { pos: "Mặt bên 2 màng kề nhau", size: "Phần lồi lõm khớp vào nhau", role: "Tăng bề mặt tiếp xúc và khóa chống trượt cơ học giữa hai tế bào.", passIon: "Không dẫn truyền ion", passPara: "Tăng độ bền cơ học" },
      gap: { pos: "Vùng rộng mặt bên (mọi mô)", size: "Đường kính ~1000 nm, khe 2–3 nm, Connexon", role: "Kênh đóng mở chuyển ion và phân tử trọng lượng ≤ 2·10³ Da trực tiếp từ TB này sang TB kia.", passIon: "CHO QUA trực tiếp qua kênh connexon!", passPara: "Truyền nội bào – nội bào (không qua kẽ ngoài)" },
      cam: { pos: "Khoảng gian bào hẹp", size: "Phân tử xuyên màng kết dính tế bào", role: "Phân tử gắn kết hai màng tế bào biểu mô lại sát nhau.", passIon: "Không tạo lỗ ion", passPara: "Duy trì khoảng gian bào hẹp" },
      microvilli: { pos: "Cực đỉnh (ruột non, ống thận)", size: "Lõi actin + villin, fimbrin, fodrin, myosin + glycocalyx", role: "Tăng diện tích bề mặt hấp thu (mâm khía ở ruột non) và tái hấp thu (bờ bàn chải ở ống thận).", passIon: "Hấp thu qua màng cực đỉnh", passPara: "Không chủ động đập" },
      stereocilia: { pos: "Cực đỉnh (ống mào tinh)", size: "Cấu tạo như vi nhung mao, dài cong, phân nhánh", role: "Tăng diện tích trao đổi chất và hấp thu ở ống mào tinh; KHÔNG chuyển động được.", passIon: "Trao đổi chất cực đỉnh", passPara: "Bất động" },
      cilia: { pos: "Cực đỉnh (hô hấp, vòi trứng)", size: "9 cặp siêu ống ngoại vi + trục trung tâm", role: "Chuyển động nhịp nhàng đẩy bụi nhầy đường hô hấp hoặc đẩy noãn trong vòi trứng.", passIon: "Đẩy cơ học bề mặt", passPara: "Chuyển động chủ động" }
    }[s];
    const testResult = t === "ion" ? data.passIon : t === "paracellular" ? data.passPara : (s === "desmo" ? "Chống xé TỐI ĐA nhờ siêu sợi keratin & tấm đặc!" : data.role);
    document.getElementById("l1_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Vị trí Chuẩn</div><div class="metric-val" style="font-size:14.5px">${data.pos}</div></div>
        <div class="metric-card"><div class="metric-label">Siêu cấu trúc / Thông số</div><div class="metric-val" style="font-size:13.5px;color:var(--accent)">${data.size}</div></div>
        <div class="metric-card"><div class="metric-label">Kết quả Thử nghiệm</div><div class="metric-val" style="font-size:13.5px;color:var(--teal)">${testResult}</div></div>
      </div>
      <div class="callout pearl" style="margin:0;"><div class="callout-title">📌 Kết luận Mô học</div><p>${data.role}</p></div>
    `;
  },

  // ========================================================================
  // LAB 2: KÍNH HIỂN VI PHÂN LOẠI 9 BIỂU MÔ PHỦ
  // ========================================================================
  sim_covering_epi(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Số lớp tế bào:</label>
          <select id="l2_layers" onchange="Simulators.upd_l2()">
            <option value="simple">Đơn tầng (1 lớp tựa màng đáy)</option>
            <option value="pseudo">Giả tầng (Mọi TB tựa chung 1 màng đáy, nhân lệch tầng)</option>
            <option value="stratified">Đa tầng (Nhiều lớp tế bào chồng lên nhau)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Chọn Hình dạng lớp nông nhất / Biến thể:</label>
          <select id="l2_shape" onchange="Simulators.upd_l2()">
            <option value="squamous">Lát (Tế bào dẹt mỏng)</option>
            <option value="cuboidal">Vuông (Khối vuông)</option>
            <option value="columnar">Trụ (Cao hơn rộng)</option>
            <option value="keratin">Lát tầng sừng hóa (Có lớp hạt &amp; lớp sừng)</option>
            <option value="urothelium">Biến đổi theo độ căng (Hình vợt + TB bề mặt lớn)</option>
          </select>
        </div>
      </div>
      <div id="l2_out"></div>
    `;
    this.upd_l2();
  },
  upd_l2() {
    const lay = document.getElementById("l2_layers").value;
    const shp = document.getElementById("l2_shape").value;
    let name = "", loc = "", feature = "", badge = "var(--primary)";
    if (lay === "pseudo") {
      name = "Biểu mô trụ giả tầng có lông chuyển";
      loc = "Đường hô hấp (khí quản, phế quản).";
      feature = "Thực chất là BIỂU MÔ ĐƠN TẦNG; có TB trụ lông chuyển, TB đài và TB dự trữ nhỏ; TẤT CẢ đều tựa trên 1 màng đáy.";
      badge = "var(--teal)";
    } else if (lay === "simple") {
      if (shp === "squamous" || shp === "keratin") {
        name = "Biểu mô lát đơn";
        loc = "Lá ngoài bao Bowman, đoạn lên quai Henlé; Trung biểu mô (màng bụng, màng phổi, màng tim); Nội mô (lòng mạch máu).";
        feature = "1 lớp tế bào đa diện dẹt, nhân dẹt hơi lồi vào lòng khoang.";
      } else if (shp === "cuboidal") {
        name = "Biểu mô vuông đơn";
        loc = "Nhiều ống bài xuất của các tuyến, ống thận (hấp thu – tái hấp thu mạnh).";
        feature = "1 lớp tế bào khối vuông, nhân tròn nằm chính giữa.";
      } else {
        name = "Biểu mô trụ đơn (và 4 biến đổi cực đỉnh)";
        loc = "Dạ dày (giọt nhầy sáng), Ruột non (vi nhung mao mâm khía), Ống thận (bờ bàn chải), Ống mào tinh (lông giả), Vòi trứng (lông chuyển).";
        feature = "1 lớp tế bào cao hơn rộng, cực đáy tựa màng đáy, cực đỉnh hướng lòng ống.";
      }
    } else {
      if (shp === "keratin") {
        name = "Biểu mô lát tầng sừng hóa";
        loc = "CHỈ GẶP Ở DA!";
        feature = "Đủ 5 lớp từ đáy lên: Đáy (khối vuông) → Gai (desmosome) → Hạt (keratohyalin ưa baz) → Bóng (eleidin) → Sừng (TB chết mất nhân).";
        badge = "var(--accent)";
      } else if (shp === "squamous") {
        name = "Biểu mô lát tầng KHÔNG sừng hóa";
        loc = "Miệng, thực quản, âm đạo.";
        feature = "Lớp đáy khối vuông, trung gian đa diện nhân lớn, bề mặt dẹt VẪN CÒN NHÂN; KHÔNG có lớp hạt (Câu 1 tr.32).";
      } else if (shp === "cuboidal") {
        name = "Biểu mô phủ vuông tầng";
        loc = "Ống bài xuất tuyến nước bọt, tuyến mồ hôi.";
        feature = "Nhiều lớp khối vuông; lớp đáy thường có nếp gấp đáy (mê đạo đáy) làm tăng diện tích trao đổi chất.";
      } else if (shp === "columnar") {
        name = "Biểu mô phủ trụ tầng";
        loc = "Các ống bài xuất có đường kính lớn.";
        feature = "1–2 lớp khối vuông bên dưới và 1 lớp hình trụ ở bề mặt.";
      } else {
        name = "Biểu mô niệu (Đa dạng tầng / Trung gian tầng)";
        loc = "CHỈ GẶP TRONG ĐƯỜNG DẪN TIỂU (đài bể thận, niệu quản, bàng quang).";
        feature = "Lớp đáy không đều; trung gian 1–2 lớp TB hình vợt; bề mặt TB rất lớn bị ấn lõm đáy và ép dẹt khi căng đầy.";
        badge = "var(--info)";
      }
    }
    document.getElementById("l2_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card" style="border:2px solid ${badge}"><div class="metric-label">Tên gọi Biểu mô Chuẩn</div><div class="metric-val" style="font-size:15px;color:${badge}">${name}</div></div>
        <div class="metric-card"><div class="metric-label">Vị trí Giải phẫu Điển hình</div><div class="metric-val" style="font-size:13px;color:var(--text-main)">${loc}</div></div>
      </div>
      <div class="callout pearl" style="margin:0;"><div class="callout-title">🔬 Tiêu chuẩn Vi thể Nhận diện</div><p>${feature}</p></div>
    `;
  },

  // ========================================================================
  // LAB 3: PHÂN LOẠI TUYẾN & KIỂU CHẾ TIẾT
  // ========================================================================
  sim_glands(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Mẫu Tuyến Theo Giáo trình:</label>
          <select id="l3_gland" onchange="Simulators.upd_l3()">
            <option value="goblet">1. Tế bào đài (ruột non / hô hấp)</option>
            <option value="sheet">2. Lá tuyến (dạ dày, cổ trong cổ tử cung)</option>
            <option value="intra">3. Tuyến trong biểu mô (BM trụ giả tầng)</option>
            <option value="lieber">4. Tuyến Lieberkühn (ruột)</option>
            <option value="pyloric">5. Tuyến môn vị (dạ dày)</option>
            <option value="brunner">6. Tuyến Brunner (tá tràng)</option>
            <option value="sweat">7. Tuyến mồ hôi thường vs nách</option>
            <option value="sebaceous">8. Tuyến bã ở da</option>
            <option value="pancreas">9. Nang tuyến tụy ngoại tiết</option>
            <option value="submand">10. Tuyến nước bọt pha (Nang pha)</option>
            <option value="mammary">11. Tuyến sữa</option>
            <option value="endo_lip">12. Tuyến nội tiết vỏ thượng thận / tuyến kẽ</option>
          </select>
        </div>
      </div>
      <div id="l3_out"></div>
    `;
    this.upd_l3();
  },
  upd_l3() {
    const g = document.getElementById("l3_gland").value;
    const map = {
      goblet: ["Tế bào tuyến biệt lập (Ngoại tiết đơn bào)", "Chất nhầy (P.A.S đỏ +)", "Toàn vẹn", "Nằm rải rác trong BM phủ trụ đơn; cực đỉnh phình hình đài hoa, cực đáy hẹp chứa nhân đậm."],
      sheet: ["Lá tuyến (Ngoại tiết)", "Chất nhầy (P.A.S đỏ +)", "Toàn vẹn", "Tất cả tế bào của BM phủ trụ đơn đều biệt hóa thành tế bào tiết nhầy (dạ dày bảo vệ khỏi HCl, cổ trong tử cung)."],
      intra: ["Tuyến trong biểu mô (Ngoại tiết)", "Chất nhầy", "Toàn vẹn", "CHỈ gặp trong BM trụ giả tầng; là chỗ lõm nhẹ chứa nhiều TB đài + ít TB trụ lông chuyển."],
      lieber: ["Tuyến ống đơn thẳng (Ngoại tiết)", "Chất nhầy + Dịch ruột (+ TB nội tiết ái bạc)", "Toàn vẹn", "Gồm cổ tuyến, thân tuyến, đáy tuyến; thân chứa tế bào đài + tế bào trụ mâm khía; tế bào nội tiết biệt lập trong Lieberkühn nhuộm nitrat bạc."],
      pyloric: ["Tuyến ống chia nhánh (Ngoại tiết)", "Chất nhầy", "Toàn vẹn", "Nhiều ống ngắn ngoằn ngoèo thông nối lên biểu mô phủ qua một cổ tuyến chung."],
      brunner: ["Tuyến ống phức tạp (Ngoại tiết)", "Chất nhầy kiềm", "Toàn vẹn", "Đầu trên thông vào lòng tuyến Lieberkühn tá tràng, đầu dưới phân nhánh nhiều lần."],
      sweat: ["Tuyến ống cong queo (Ngoại tiết)", "Mồ hôi", "Toàn vẹn (thường) / Bán hủy (một số tuyến mồ hôi nách)", "Phần bài xuất là ống thẳng BM vuông kép; phần chế tiết là ống cong queo 1 lớp TB vuông nhân tròn, bào tương sáng."],
      sebaceous: ["Tuyến túi đơn (Ngoại tiết)", "Lipid (chất nhờn giữ ẩm da)", "TOÀN HỦY (Holocrine)", "Toàn bộ tế bào biến thành chất tiết thải ra ngoài; vùng đáy gián phân thay thế."],
      pancreas: ["Tuyến túi phức tạp – Nang nước", "Protein (enzym tụy)", "TOÀN VẸN (Merocrine)", "Thành nang TB tháp, nhân tròn lệch đáy, cực đỉnh chứa nhiều hạt chế tiết, bào tương cực đáy ái kiềm; tiết liên tục giữ nguyên tế bào."],
      submand: ["Tuyến túi phức tạp – Nang pha", "Phức hợp protein – hydrat cacbon", "Toàn vẹn", "Chủ yếu là tế bào tiết nhầy ở giữa (nhân dẹt đáy) bao ngoài bởi tế bào tiết nước xếp thành LIỀM BÁN NGUYỆT GIANUZZI."],
      mammary: ["Tuyến túi phức tạp", "CẢ 3 LOẠI: Protein + Lipid + Hydrat cacbon!", "BÁN HỦY (Apocrine) với giọt lipid", "Duy nhất tiết cả 3 nhóm chất; tiết bán hủy đứt khối chất tiết cùng phần bào tương cực đỉnh."],
      endo_lip: ["Tuyến nội tiết (Cơ quan / Đám)", "Hormon bản chất Lipid (hoặc Protein)", "Nội tiết (Thẳng vào máu)", "Không có ống dẫn, tế bào không phân cực rõ, nhân giữa. Nếu tiết lipid: bào tương nhiều không bào nhỏ đồng đều; tiết protein: bào tương dạng hạt."]
    };
    const [cls, prod, mode, desc] = map[g];
    document.getElementById("l3_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Phân loại Hình thái</div><div class="metric-val" style="font-size:14px">${cls}</div></div>
        <div class="metric-card"><div class="metric-label">Bản chất Sản phẩm</div><div class="metric-val" style="font-size:14px;color:var(--accent)">${prod}</div></div>
        <div class="metric-card"><div class="metric-label">Kiểu Chế tiết</div><div class="metric-val" style="font-size:14px;color:var(--teal)">${mode}</div></div>
      </div>
      <div class="callout pearl" style="margin:0;"><div class="callout-title">🔬 Đặc điểm Vi thể Chuẩn Sách (tr. 24–30)</div><p>${desc}</p></div>
    `;
  },

  // ========================================================================
  // LAB 4: 9 TẾ BÀO MÔ LIÊN KẾT
  // ========================================================================
  sim_ct_cells(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn 1 trong 9 Tế bào Mô Liên kết:</label>
          <select id="l4_cell" onchange="Simulators.upd_l4()">
            <option value="msc">1. Tế bào trung mô</option>
            <option value="fibro">2. Nguyên bào sợi – Tế bào sợi</option>
            <option value="macro">3. Đại thực bào</option>
            <option value="plasma">4. Tương bào</option>
            <option value="mast">5. Masto bào (Tế bào mast)</option>
            <option value="peri">6. Chu bào</option>
            <option value="endo">7. Tế bào nội mô</option>
            <option value="melano">8. Tế bào sắc tố</option>
            <option value="adipo">9. Tế bào mỡ</option>
          </select>
        </div>
      </div>
      <div id="l4_out"></div>
    `;
    this.upd_l4();
  },
  upd_l4() {
    const c = document.getElementById("l4_cell").value;
    const db = {
      msc: ["TB cố định • Nguồn phôi & người lớn", "Nhỏ, thon dài / hình sao; nhân bầu dục giữa; nhân/BT > 1; tỏa nhánh nối lưới trung mô.", "Tế bào gốc đa năng: biệt hóa thành nguyên bào sợi và nhiều TB mô liên kết khác."],
      fibro: ["TB cố định • Thường gặp nhất (từ trung mô)", "Nguyên bào sợi hình thoi, nhân kéo dài, ái kiềm nhẹ, rất nhiều LNBH. TB sợi là dạng trưởng thành.", "2 chức năng trái ngược: tổng hợp sợi & chất căn bản vs tiết enzym phân hủy protein nền rồi tái hấp thu → đổi mới nền ngoại bào; tạo sẹo."],
      macro: ["Từ Mono bào máu & tại chỗ", "Lớn, đường viền không đều (lõm thực bào), bào tương không đồng nhất nhiều thể vùi.", "3 nhóm: Tại chỗ (Kupffer gan, lách chứa hemosiderin, TB bụi phổi), Viêm (dọn ổ viêm), Phụ trợ miễn dịch (trình diện KN cho T hỗ trợ)."],
      plasma: ["Từ Lympho B máu • Miễn dịch dịch thể", "Nhân tròn lệch 1 bên, chất nhiễm sắc cô đặc bám màng nhân; bào tương rất ái kiềm (LNBH) + Golgi sáng cạnh nhân.", "Tổng hợp và tích trữ các globulin miễn dịch (kháng thể)."],
      mast: ["Từ TB gốc tủy xương → máu → mô LK", "Quanh mạch máu; đường kính >20 µm, nhân tròn, đầy hạt ái kiềm lớn.", "Chứa histamin (giãn mạch, tăng thấm, co cơ trơn), protease, ECF-A, heparin; mang thụ thể IgE gây phản ứng dị ứng khi tiếp xúc lần 2."],
      peri: ["TB cố định • TB trung mô gần mao mạch", "Nằm ôm ngoài thành mao mạch, ngăn cách với nội mô qua 1 màng đáy; bề mặt có tận cùng thần kinh.", "Điều chỉnh lòng (kích thước) mao mạch."],
      endo: ["TB cố định (một số tác giả xếp vào BM lát đơn)", "Lớn 75–150 µm nhưng rất mỏng; liên kết chặt nhau; bào tương nhiều không bào, ẩm bào.", "Lót mặt trong mạch máu: hàng rào sinh học và trao đổi chất – khí giữa máu và mô."],
      melano: ["TB chuyên biệt liên hệ ở da (Mào thần kinh)", "Thân ở lớp sinh sản, nhánh bào tương vươn lên lớp gai; phát hiện bằng nhuộm bạc.", "Tổng hợp sắc tố melanin bảo vệ da."],
      adipo: ["TB chuyên biệt • Dự trữ năng lượng", "Kích thước lớn, bào tương bị choán gần hết bởi 1 giọt lipid lớn đẩy nhân ép dẹt sát màng.", "Dự trữ năng lượng, cách nhiệt chống lạnh, tạo hình và đệm cơ học."]
    };
    const [org, morph, fn] = db[c];
    document.getElementById("l4_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Nhóm &amp; Nguồn gốc</div><div class="metric-val" style="font-size:13.5px">${org}</div></div>
        <div class="metric-card"><div class="metric-label">Đặc điểm Vi &amp; Siêu cấu trúc</div><div class="metric-val" style="font-size:13px;color:var(--accent)">${morph}</div></div>
      </div>
      <div class="callout pearl" style="margin:0;"><div class="callout-title">⚡ Chức năng &amp; Ghi nhớ Trắc nghiệm</div><p>${fn}</p></div>
    `;
  },

  // ========================================================================
  // LAB 5: PHÒNG LAB SỢI LIÊN KẾT, CHẤT CĂN BẢN & NHUỘM ĐẶC HIỆU
  // ========================================================================
  sim_fibers_matrix(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Cấu trúc Ngoại bào:</label>
          <select id="l5_item" onchange="Simulators.upd_l5()">
            <option value="col1">Collagen Týp I (&gt;80%)</option>
            <option value="col2">Collagen Týp II</option>
            <option value="col3">Collagen Týp III (Sợi lưới)</option>
            <option value="col4">Collagen Týp IV</option>
            <option value="elastin">Sợi Chun (Elastin + Vi sợi 10 nm)</option>
            <option value="pg">Proteoglycan &amp; Acid hyaluronic</option>
            <option value="fn">Fibronectin (-S-S-)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Chọn Kỹ thuật Nhuộm / Quan sát:</label>
          <select id="l5_stain" onchange="Simulators.upd_l5()">
            <option value="he">Nhuộm thường (H&amp;E)</option>
            <option value="silver">Kỹ thuật Ngấm bạc</option>
            <option value="af">Nhuộm Aldehyde fuchsin</option>
            <option value="tem">Kính hiển vi Điện tử (TEM)</option>
          </select>
        </div>
      </div>
      <div id="l5_out"></div>
    `;
    this.upd_l5();
  },
  upd_l5() {
    const it = document.getElementById("l5_item").value;
    const st = document.getElementById("l5_stain").value;
    const items = {
      col1: { loc: "Lớp bì da, xương, sụn xơ, cân, dây chằng, gân cơ", dim: "Bó lớn (tropocollagen 1,5 × 280 nm, vân 64 nm)", stainRes: { he: "Bó sợi hồng rõ (hoặc xanh lá cây theo trichrome)", silver: "Không đặc hiệu bằng týp III", af: "Không bắt tím đặc hiệu", tem: "Thấy rõ vân sáng – tối chu kỳ 64 nm (khoảng hở 30 nm)" } },
      col2: { loc: "Đặc trưng của sụn trong", dim: "Vi sợi mảnh dạng tấm dạ phớt (0,31 µm)", stainRes: { he: "Không thấy thành bó riêng rẽ → nền sụn đồng nhất mịn", silver: "Không dùng ngấm bạc", af: "Không bắt tím", tem: "Thấy mạng vi sợi mảnh đan như tấm dạ phớt" } },
      col3: { loc: "Khung đỡ cơ quan tạo huyết (hạch, lách, tủy), bọc TB mỡ & cơ trơn", dim: "Sợi nhỏ phân nhánh đan mạng lưới", stainRes: { he: "KHÔNG THẤY ĐƯỢC bằng nhuộm thường!", silver: "Bắt màu ĐEN rực (kỹ thuật chuẩn để thấy sợi lưới!)", af: "Không đặc hiệu", tem: "Vi sợi mảnh phân nhánh" } },
      col4: { loc: "Chỉ gặp trong màng đáy cầu thận (và màng đáy)", dim: "Không tạo vi sợi, nối đầu–đầu (2,98 µm)", stainRes: { he: "Hòa vào dải màng đáy mảnh", silver: "Không tạo mạng sợi lưới", af: "Không bắt tím", tem: "Lớp mạng phân tử không tạo vi sợi có vân 64 nm" } },
      elastin: { loc: "Phổi, động mạch lớn, dây chằng vàng, dây thanh âm", dim: "Elastin (750 aa) + vi sợi collagen 10 nm", stainRes: { he: "Khó phân biệt rạch ròi với collagen", silver: "Không đặc hiệu", af: "Bắt màu TÍM rực rỡ (kỹ thuật chuẩn phát hiện sợi chun!)", tem: "Lõi elastin vô định hình + vi sợi ngoại vi 10 nm" } },
      pg: { loc: "Chất căn bản liên kết & sụn (chondroitin sulfat)", dim: "Hàng trăm triệu Da (trục protein + GAG đường đôi + HA)", stainRes: { he: "Ái kiềm nhẹ (nhất là ở cầu sụn)", silver: "Không dùng", af: "Không dùng", tem: "Cấu trúc chổi lông gắn trên trục acid hyaluronic qua protein nối" } },
      fn: { loc: "Chất căn bản nối sợi – tế bào", dim: "2 chuỗi protein gắn cầu disulfur (-S-S-)", stainRes: { he: "Không thấy riêng lẻ ở KHV quang học", silver: "Không dùng", af: "Không dùng", tem: "Gắn một đầu vào proteoglycan/collagen, đầu kia móc actin qua protein xuyên màng" } }
    }[it];
    document.getElementById("l5_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Phân bố Điển hình</div><div class="metric-val" style="font-size:13.5px">${items.loc}</div></div>
        <div class="metric-card"><div class="metric-label">Kích thước / Cấu trúc</div><div class="metric-val" style="font-size:13.5px;color:var(--accent)">${items.dim}</div></div>
        <div class="metric-card"><div class="metric-label">Hình ảnh Dưới Kỹ thuật Đã chọn</div><div class="metric-val" style="font-size:13.5px;color:var(--teal)">${items.stainRes[st]}</div></div>
      </div>
    `;
  },

  // ========================================================================
  // LAB 6: SO SÁNH MÔ LƯỚI & MÔ MỠ TRẮNG / NÂU
  // ========================================================================
  sim_reticular_adipose(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Mô Chuyên biệt Khảo sát:</label>
          <select id="l6_mod" onchange="Simulators.upd_l6()">
            <option value="ret_silver">Mô Lưới – Nhuộm Ngấm bạc</option>
            <option value="ret_he">Mô Lưới – Nhuộm H&amp;E Thông thường</option>
            <option value="fat_white">Mô Mỡ Trắng (Người trưởng thành)</option>
            <option value="fat_brown">Mô Mỡ Nâu (Trẻ sơ sinh)</option>
          </select>
        </div>
      </div>
      <div id="l6_out"></div>
    `;
    this.upd_l6();
  },
  upd_l6() {
    const m = document.getElementById("l6_mod").value;
    const db = {
      ret_silver: ["2 thành phần: TB lưới + Sợi lưới (Collagen III); KHÔNG chất căn bản", "Sợi lưới bắt màu ĐEN tạo mạng thứ nhất; thấy tế bào máu/hồng cầu nằm trong mắt lưới; khó thấy tế bào lưới.", "Hạch bạch huyết, lách, tủy xương."],
      ret_he: ["2 thành phần: TB lưới + Sợi lưới; KHÔNG chất căn bản", "Thấy rõ TẾ BÀO LƯỚI hình sao có nhiều nhánh bào tương đan nối thành mạng lưới thứ hai móc chồng lên mạng sợi lưới.", "Khung đỡ cơ quan tạo huyết."],
      fat_white: ["Tiểu thùy phân cách bởi vách MLK đặc; rất giàu mao mạch; mỗi TB bọc bởi collagen III", "1 giọt lipid khổng lồ duy nhất đẩy nhân ép dẹt sát màng tế bào.", "Dự trữ năng lượng giữa bữa ăn, cách nhiệt, tạo hình, bảo vệ cơ học."],
      fat_brown: ["Tiểu thùy giàu mao mạch phong phú + tế bào chứa nhiều ty thể", "Nhiều giọt mỡ nhỏ rải rác trong bào tương (không hòa thành 1 giọt lớn), nhân ít bị ép dẹt.", "Nhiều ở trẻ sơ sinh; màu nâu do mao mạch dày đặc + nhiều ty thể sinh nhiệt chống lạnh."]
    }[m];
    document.getElementById("l6_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Cấu trúc Thành phần</div><div class="metric-val" style="font-size:13.5px">${db[0]}</div></div>
        <div class="metric-card"><div class="metric-label">Hình ảnh Vi thể Quan sát</div><div class="metric-val" style="font-size:13.5px;color:var(--accent)">${db[1]}</div></div>
        <div class="metric-card"><div class="metric-label">Phân bố &amp; Chức năng</div><div class="metric-val" style="font-size:13.5px;color:var(--teal)">${db[2]}</div></div>
      </div>
    `;
  },

  // ========================================================================
  // LAB 7: SO SÁNH 3 LOẠI SỤN & DINH DƯỠNG – LÃO HÓA
  // ========================================================================
  sim_cartilage(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Loại Mô Sụn:</label>
          <select id="l7_type" onchange="Simulators.upd_l7()">
            <option value="hyaline">Sụn Trong (Hyaline – Phổ biến nhất)</option>
            <option value="articular">Sụn Trong ở Diện Khớp (Sụn khớp)</option>
            <option value="elastic">Sụn Chun (Elastic)</option>
            <option value="fibro">Sụn Xơ (Fibrocartilage)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Độ tuổi Cơ thể:</label>
          <select id="l7_age" onchange="Simulators.upd_l7()">
            <option value="young">Phôi thai / Trẻ đang tăng trưởng</option>
            <option value="old">Người cao tuổi (Lão hóa sụn)</option>
          </select>
        </div>
      </div>
      <div id="l7_out"></div>
    `;
    this.upd_l7();
  },
  upd_l7() {
    const t = document.getElementById("l7_type").value;
    const age = document.getElementById("l7_age").value;
    const map = {
      hyaline: { fiber: "Vi sợi Collagen týp II (tấm dạ phớt → nền đồng nhất)", peri: "CÓ Màng sụn (2 lớp)", calc: "Có thể vôi hóa khi già hoặc cốt hóa", nutr: "Nhờ khuếch tán từ MÀNG SỤN (không có mạch máu)" },
      articular: { fiber: "Vi sợi Collagen týp II (4 lớp sụn khớp)", peri: "KHÔNG CÓ Màng sụn!", calc: "Ít vôi hóa sinh lý vùng sâu", nutr: "Nhờ DỊCH KHỚP và mô xương Havers xốp bên dưới" },
      elastic: { fiber: "Sợi chun quanh ổ sụn & từ màng sụn đi vào", peri: "CÓ Màng sụn (2 lớp)", calc: "KHÔNG BAO GIỜ VÔI HÓA!", nutr: "Nhờ màng sụn (ít lipid/glycogen/chondroitin sulfat hơn sụn trong)" },
      fibro: { fiber: "Bó lớn Collagen týp I xếp song song thấy rõ dưới KHV Q.học", peri: "KHÔNG CÓ Màng sụn!", calc: "Hiếm vôi hóa", nutr: "Khuếch tán từ mô liên kết / xương kế cận" }
    }[t];
    const ageNote = age === "young"
      ? "Tăng trưởng mạnh nhờ CẢ sinh sản đắp thêm (nếu có màng sụn) VÀ sinh sản gian bào (kiểu vòng & kiểu trục)."
      : (t === "elastic" ? "Sụn chun KHÔNG BAO GIỜ bị vôi hóa dù ở tuổi già!" : "Khi già: hàm lượng proteoglycan giảm → giảm tính ưa nước; bào quan & men giảm nhưng glycogen TĂNG; ổ sụn chết bị collagen xâm nhập và ngấm canxi làm sụn đục, cứng nhưng giòn.");
    document.getElementById("l7_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Loại Sợi Chủ đạo</div><div class="metric-val" style="font-size:13.5px">${map.fiber}</div></div>
        <div class="metric-card"><div class="metric-label">Màng sụn &amp; Dinh dưỡng</div><div class="metric-val" style="font-size:13px;color:var(--accent)">${map.peri} • ${map.nutr}</div></div>
        <div class="metric-card"><div class="metric-label">Hiện tượng Vôi hóa</div><div class="metric-val" style="font-size:13.5px;color:var(--danger)">${map.calc}</div></div>
      </div>
      <div class="callout pearl" style="margin:0;"><div class="callout-title">⏳ Biến đổi theo Tuổi &amp; Miễn dịch Ghép sụn</div><p>${ageNote} (Ghép sụn dễ dàng vì phân tử protein kháng nguyên lớn không xuyên qua được chất căn bản sụn).</p></div>
    `;
  },

  // ========================================================================
  // LAB 8: CHUYỂN HÓA XƯƠNG, HORMON, VITAMIN & 4 BỆNH LÝ
  // ========================================================================
  sim_bone_remodeling(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Trạng thái Sinh lý / Bệnh lý Xương (tr. 61–63):</label>
          <select id="l8_cond" onchange="Simulators.upd_l8()">
            <option value="normal">1. Xương bình thường (Cân bằng Tạo – Hủy)</option>
            <option value="scurvy">2. Bệnh Scocbut / Scurvy (Thiếu Vitamin C)</option>
            <option value="rickets">3. Bệnh Còi xương – Trẻ em (Thiếu Vitamin D / Ca)</option>
            <option value="osteomalacia">4. Bệnh Nhuyễn xương – Người lớn (Thiếu Vit D / Ca)</option>
            <option value="osteoporosis">5. Bệnh Loãng xương (Mãn kinh / Già / Corticoid)</option>
          </select>
        </div>
      </div>
      <div id="l8_out"></div>
    `;
    this.upd_l8();
  },
  upd_l8() {
    const c = document.getElementById("l8_cond").value;
    const db = {
      normal: { org: "30% (95% collagen týp I + osteonectin/osteocalcin)", inorg: "70% (Ca₉(PO₄)₆ vô định hình + tinh thể hydroxyapatite Ca₅(PO₄)₃OH)", ratio: "Chuẩn 30 : 70", clinic: "Chịu lực kéo 15 kg/mm² và lực nén 10 kg/mm². Luôn song hành tạo cốt bào – cốt bào – hủy cốt bào dưới kiểm soát PTH, calcitonin, vitamin D." },
      scurvy: { org: "GIẢM MẠNH chất căn bản & collagen", inorg: "KHÔNG làm giảm sự nhiễm canxi!", ratio: "Tăng tương đối vô cơ / giảm chiều dày xương", clinic: "Thiếu Vitamin C: chiều dày xương giảm nên dễ gãy; chảy máu chân răng, thiếu máu (da tái), mắt trũng." },
      rickets: { org: "Phát triển bình thường (vẫn tạo chất dạng xương)", inorg: "GIẢM MẠNH vôi hóa (giảm hấp thu Ca & P ở ruột)", ratio: "Thiếu khoáng nghiêm trọng", clinic: "5 dấu hiệu (H.5.11): Thóp chậm đóng, Xương sườn lõm chuỗi hạt sườn, Tay cong, Khớp sưng, Chân cong." },
      osteomalacia: { org: "TĂNG chất hữu cơ (chất dạng xương chưa vôi hóa)", inorg: "GIẢM vô cơ (lắng đọng không hoàn toàn)", ratio: "Giảm vô cơ / Tăng hữu cơ", clinic: "'Còi xương ở người lớn': đau xương và biến dạng xương sớm do khẩu phần thiếu Vitamin D và Canxi." },
      osteoporosis: { org: "GIẢM khối lượng hữu cơ", inorg: "GIẢM khối lượng vô cơ", ratio: "TỶ LỆ VÔ CƠ / HỮU CƠ KHÔNG THAY ĐỔI!", clinic: "Đời sống tạo cốt bào ngắn → tạo xương chậm hơn hủy xương (nữ mãn kinh, già, ít vận động, corticoid). Thường không triệu chứng đến khi gãy xương đột ngột hoặc còng lưng." }
    }[c];
    document.getElementById("l8_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Thành phần Hữu cơ</div><div class="metric-val" style="font-size:13.5px;color:var(--warning)">${db.org}</div></div>
        <div class="metric-card"><div class="metric-label">Thành phần Vô cơ</div><div class="metric-val" style="font-size:13.5px;color:var(--info)">${db.inorg}</div></div>
        <div class="metric-card"><div class="metric-label">Tỷ lệ Vô cơ / Hữu cơ</div><div class="metric-val" style="font-size:13.5px;color:var(--danger)">${db.ratio}</div></div>
      </div>
      <div class="callout pearl" style="margin:0;"><div class="callout-title">🩺 Cơ chế &amp; Biểu hiện Lâm sàng (tr. 61–63)</div><p>${db.clinic}</p></div>
    `;
  }
};
