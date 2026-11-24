// ==========================================================================
// NGÂN HÀNG MỞ RỘNG & PHÂN TẦNG KSA + MỨC NHẬN THỨC (BÀI 1 ĐẾN BÀI 8)
// Mỗi bài: 6 câu nền + 18 câu mở rộng = 24 câu/bài → Tổng 192 câu chuẩn YDS
// Phân tầng: Mức 1 Thuộc (6/24 = 25%) • Mức 2 Hiểu (9/24 = 37,5%) • Mức 3 Vận dụng (9/24 = 37,5%)
// Năng lực: K (Kiến thức) • S (Kỹ năng soi/nhận diện) • A (Thái độ / Lâm sàng)
// ==========================================================================

window.EXTRA_QUESTIONS = {
  // ========================================================================
  // BÀI 1: ĐẠI CƯƠNG, SINH HỌC BIỂU MÔ & LIÊN KẾT TẾ BÀO
  // Base (6): L1=2, L2=4 | Extra (18): L1=4, L2=5, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  1: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu trúc)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Thông số)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Siêu cấu trúc)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt cực đỉnh" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Biểu mô có nguồn gốc từ lá phôi nào trong quá trình phát triển phôi thai?",
        source: "Mô học Trần Công Toại – Mục IV.1 (tr. 30)",
        options: [
          "Từ cả ba lá phôi: ngoại bì, nội bì hoặc trung bì phôi",
          "Chỉ từ ngoại bì phôi",
          "Chỉ từ nội bì phôi",
          "Chỉ từ trung bì phôi và mào thần kinh"
        ],
        answer: 0,
        explain: "Trang 30 (IV.1): Biểu mô có nguồn gốc từ ngoại bì (da), hoặc nội bì (ruột, hô hấp), hoặc trung bì phôi (nội mô mạch máu, trung biểu mô thanh mạc, ống thận)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Bốn protein có vai trò cố định các siêu sợi actin chạy dọc bên trong vi nhung mao là:",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 21)",
        options: [
          "Villin, fimbrin, fodrin và myosin",
          "Keratin, elastin, collagen và laminin",
          "Osteonectin, osteocalcin, fibrin và actin",
          "Connexon, fibronectin, heparin và histamin"
        ],
        answer: 0,
        explain: "Trang 21 ghi chính xác: Các siêu sợi actin trong vi nhung mao được cố định nhờ các protein villin, fimbrin, fodrin và myosin; bên ngoài phủ áo glycocalyx."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Lớp áo tế bào giàu carbohydrat bao phủ bên ngoài màng các vi nhung mao được gọi là gì?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 21)",
        options: [
          "Glycocalyx",
          "Keratohyalin",
          "Eleidin",
          "Chất dạng xương"
        ],
        answer: 0,
        explain: "Trang 21: Vi nhung mao được phủ bởi một lớp áo tế bào gọi là glycocalyx."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nếp gấp đáy (mê đạo đáy) ở tế bào biểu mô có bản chất là gì?",
        source: "Mô học Trần Công Toại – Mục II.7 (tr. 23)",
        options: [
          "Những chỗ màng bào tương ở cực đáy lõm sâu vào bào tương để tăng diện tích bề mặt đáy",
          "Những bó siêu sợi keratin xuyên từ cực đỉnh xuống trung tâm nhân",
          "Các hốc nhỏ chứa dịch glycoprotein nối các tế bào biểu mô với tế bào sợi",
          "Các hàng phân tử protein may kín hai màng bào tương ở cực ngọn"
        ],
        answer: 0,
        explain: "Trang 23: Nếp gấp đáy là những chỗ màng bào tương ở cực đáy lõm sâu vào bào tương tạo thành những mê đạo đáy, làm tăng diện tích màng đáy giúp trao đổi chất thuận lợi."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)",
        q: "Vì sao biểu mô không có mạch máu nhưng các tế bào biểu mô vẫn sống, phân chia và tái tạo mạnh mẽ?",
        source: "Mô học Trần Công Toại – Mục I.2 & IV.2 (tr. 19, 30)",
        options: [
          "Nhờ các chất dinh dưỡng từ mao mạch trong mô liên kết đệm khuếch tán thẩm thấu qua màng đáy lên biểu mô",
          "Nhờ hệ thống lông chuyển và vi nhung mao tự tổng hợp năng lượng từ lòng ống",
          "Nhờ liên kết khe connexon dẫn trực tiếp hồng cầu đi vào khoảng gian bào biểu mô",
          "Nhờ lớp sừng bề mặt hấp thu oxy trực tiếp từ không khí"
        ],
        answer: 0,
        explain: "Trang 19 & 30: Biểu mô phủ luôn tựa lên một mô đệm và được nuôi dưỡng nhờ sự thẩm thấu các chất dinh dưỡng từ mô liên kết qua màng đáy."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Trong tế bào học mô biểu mô, thuật ngữ 'Mâm khía' và 'Bờ bàn chải' đều chỉ cấu trúc nào dưới kính hiển vi điện tử?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 20)",
        options: [
          "Đều được tạo bởi các cấu trúc hình trụ xếp song song gọi là các vi nhung mao",
          "Mâm khía là lông chuyển có 9 cặp siêu ống, còn bờ bàn chải là lông giả",
          "Mâm khía là nếp gấp đáy ở tuyến mồ hôi, còn bờ bàn chải là hạt eleidin ở da",
          "Mâm khía gặp ở khí quản, còn bờ bàn chải gặp ở ống mào tinh"
        ],
        answer: 0,
        explain: "Trang 20: Biểu mô trụ đơn ở ruột non có cực đỉnh gọi là mâm khía, ở ống thận gọi là bờ bàn chải; dưới KHV điện tử cả hai đều tạo bởi các vi nhung mao."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Giữa 'Thể liên kết vòng (Belt desmosome)' và 'Thể liên kết (Desmosome)' có điểm khác nhau nổi bật nào?",
        source: "Mô học Trần Công Toại – Mục V (tr. 31–32)",
        options: [
          "Thể liên kết vòng tạo dải quanh tế bào ở cực ngọn; Desmosome là điểm bầu dục (200–500 nm) gắn siêu sợi keratin ở mặt bên",
          "Thể liên kết vòng nằm ở màng đáy; Desmosome nằm tự do trong lòng ống",
          "Thể liên kết vòng chuyển ion TLPT ≤ 2·10³; Desmosome chỉ có ở mô sụn",
          "Thể liên kết vòng là chất gắn CAM; Desmosome chỉ có ở thực vật"
        ],
        answer: 0,
        explain: "Trang 31–32: Thể liên kết vòng tạo một dải quanh tế bào ở cực ngọn; Thể liên kết (Desmosome) có dạng bầu dục 200–500 nm chứa tấm bào tương đặc và siêu sợi keratin."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chức năng)",
        q: "Chức năng nào sau đây KHÔNG thuộc năm chức năng chính của biểu mô được liệt kê trong giáo trình?",
        source: "Mô học Trần Công Toại – Mục IV.4 (tr. 31)",
        options: [
          "Tạo huyết và dự trữ canxi dưới dạng hydroxyapatite",
          "Bảo vệ cơ thể chống va chạm và bốc hơi nước",
          "Hấp thu, tái hấp thu thức ăn và nước tiểu",
          "Vận chuyển bụi và thu nhận cảm giác nóng, lạnh, đau"
        ],
        answer: 0,
        explain: "Trang 31 nêu 5 chức năng biểu mô: Bảo vệ, Hấp thu – tái hấp thu, Chế tiết, Vận chuyển và Thu nhận cảm giác. Tạo huyết và chuyển hóa phospho-canxi là của mô xương."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Đọc hình TEM",
        q: "Trên ảnh kính hiển vi điện tử xuyên (Hình 2.1, tr. 18), để nhận ra hai tế bào biểu mô đang gắn kết bằng desmosome chứ không phải mô liên kết, dấu hiệu đặc hiệu nào được chỉ ra?",
        source: "Mô học Trần Công Toại – Hình 2.1 (tr. 18)",
        options: [
          "Tấm đặc trên màng đối diện kèm các bó siêu sợi keratin mảnh (tơ trương lực) neo vào từ hai phía",
          "Các vi sợi collagen dài 280 nm có vân sáng – tối chu kỳ 64 nm nằm đầy giữa hai tế bào",
          "Các hạt ái kiềm lớn chứa histamin và heparin trong bào tương",
          "Mạng lưới vi quản xương chứa dịch glycoprotein bao quanh nhân"
        ],
        answer: 0,
        explain: "Hình 2.1 (tr. 18): Mũi tên đỏ chỉ các liên kết tế bào (desmosome), đầu mũi tên đỏ chỉ các bó siêu sợi keratin trong bào tương biểu mô."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng siêu cấu trúc",
        q: "Một thuốc thử đánh dấu huỳnh quang kích thước phân tử 1.200 Da được tiêm trực tiếp vào bào tương một tế bào biểu mô gan. Sau ít phút, thuốc thử lan sang các tế bào lân cận nhưng KHÔNG thoát ra dịch ngoại bào khoang mật. Hiện tượng này chứng tỏ vai trò phối hợp của hai loại liên kết nào?",
        source: "Mô học Trần Công Toại – Mục V (tr. 31–32)",
        options: [
          "Liên kết khe (cho phân tử ≤ 2·10³ Da đi qua connexon sang tế bào cạnh) và Liên kết vòng bịt (ngăn rò qua kẽ cực ngọn)",
          "Thể liên kết desmosome (cho ion qua) và Khớp mộng (ngăn thấm)",
          "Chất gắn CAM (bơm thuốc vào khoang) và Mê đạo đáy",
          "Lông giả (chuyển thuốc) và Siêu sợi keratin"
        ],
        answer: 0,
        explain: "Liên kết khe (Gap junction) chuyển được phân tử có TLPT ≤ 2·10³ (2.000 Da) giữa bào tương các tế bào qua kênh connexon, trong khi Liên kết vòng bịt (Tight junction) bịt kín khe cực ngọn ngăn chất hòa tan rò sang khoang ngoài."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng bệnh học",
        q: "Bệnh nhân có bệnh lý tự miễn làm đứt gãy kháng thể chống lại protein liên kết tại các tấm bào tương gắn với siêu sợi keratin, dẫn đến các tế bào lớp gai của biểu bì tách rời nhau tạo bóng nước trong biểu mô. Tổn thương trực tiếp xảy ra tại cấu trúc nào?",
        source: "Mô học Trần Công Toại – Mục II.5 & V (tr. 22, 32)",
        options: [
          "Thể liên kết (Desmosome)",
          "Liên kết khe (Gap junction)",
          "Lông chuyển (Cilia)",
          "Nếp gấp đáy (Mê đạo đáy)"
        ],
        answer: 0,
        explain: "Thể liên kết (Desmosome) dạng bầu dục 200–500 nm gắn các siêu sợi keratin giữ chặt tế bào biểu mô (đặc biệt phong phú ở lớp gai da); mất desmosome làm tế bào lớp gai tách rời nhau."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng sinh lý mô",
        q: "Khi quan sát tiêu bản niêm mạc khí quản và ống mào tinh dưới KHV quang học, tại sao lông chuyển ở khí quản/vòi trứng giúp đẩy chất nhầy hoặc noãn đi được, còn lông giả ở ống mào tinh dù rất dài nhưng lại KHÔNG đẩy tinh trùng đi?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 21–22)",
        options: [
          "Vì lông chuyển có cấu tạo 9 cặp siêu ống ngoại vi + trục trung tâm có khả năng chuyển động, còn lông giả cấu tạo bằng lõi actin như vi nhung mao nên bất động",
          "Vì lông giả bị màng đáy bao bọc kín nên không tiếp xúc lòng ống",
          "Vì lông chuyển cấu tạo bằng collagen týp I co giãn như dây chun",
          "Vì ống mào tinh là biểu mô lát tầng sừng hóa không có tế bào sống"
        ],
        answer: 0,
        explain: "Trang 21–22: Lông giả ở ống mào tinh cấu tạo như vi nhung mao (lõi sợi actin) không có khả năng chuyển động, chỉ giúp tăng diện tích trao đổi chất; lông chuyển có cấu trúc 9 cặp siêu ống nên chuyển động được."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng chẩn đoán",
        q: "Sinh thiết khối u trong biểu mô niêm mạc đường tiêu hóa thấy các tế bào u liên kết chặt nhau thành đám và nhuộm hóa mô miễn dịch dương tính mạnh với siêu sợi KERATIN. Kết quả này hướng tới nguồn gốc mô nào?",
        source: "Mô học Trần Công Toại – Mục I.1 (tr. 18)",
        options: [
          "Biểu mô (vì bào tương tế bào biểu mô đặc trưng chứa siêu sợi keratin)",
          "Mô liên kết chính thức (đặc trưng bởi sợi elastin và collagen týp I)",
          "Mô sụn (đặc trưng bởi chondroitin sulfat)",
          "Mô mỡ nâu (đặc trưng bởi nhiều giọt lipid và ty thể)"
        ],
        answer: 0,
        explain: "Trang 18: Bào tương tế bào biểu mô chứa siêu sợi keratin (Hình 2.1) và tế bào liên kết chặt chẽ nhau — là dấu ấn sinh học phân biệt biểu mô với mô liên kết."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng siêu cấu trúc",
        q: "Tại biểu mô phủ vuông tầng của ống bài xuất tuyến nước bọt và tuyến mồ hôi, tế bào lớp đáy có rất nhiều 'nếp gấp đáy' (mê đạo đáy). Ý nghĩa chức năng trực tiếp của cấu trúc này là gì?",
        source: "Mô học Trần Công Toại – Mục II.7 (tr. 23)",
        options: [
          "Làm tăng rất nhiều diện tích màng bào tương ở mặt đáy, tạo thuận lợi và tăng cường trao đổi chất – ion với mô đệm",
          "Giúp biểu mô tự tổng hợp collagen týp IV tạo sụn xơ",
          "Ngăn không cho chất dinh dưỡng từ mô đệm thấm vào biểu mô",
          "Biến tế bào đáy thành tế bào đài tiết nhầy kiểu toàn hủy"
        ],
        answer: 0,
        explain: "Trang 23: Nhờ những mê đạo đáy (màng bào tương cực đáy lõm sâu vào bào tương), toàn bộ diện tích màng bào tương ở mặt đáy tăng lên rất nhiều → quá trình trao đổi chất thuận lợi và tăng lên."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ thực hành",
        q: "Khi cắt lát quá dày hoặc cắt xéo không vuông góc màng đáy trên tiêu bản mô học biểu mô, nguy cơ sai sót nhận định nào dễ xảy ra nhất đối với học viên thực hành?",
        source: "Mô học Trần Công Toại – Mở đầu & Biểu mô (tr. 16, 20–22)",
        options: [
          "Nhầm lẫn biểu mô đơn tầng (như biểu mô trụ giả tầng hoặc cắt xéo qua đáy nếp gấp) thành biểu mô đa tầng",
          "Nhầm biểu mô với mô xương đặc vì xuất hiện hệ thống Havers giả",
          "Làm hòa tan hoàn toàn các siêu sợi keratin thành sợi chun",
          "Làm đảo ngược nguồn gốc lá phôi từ ngoại bì sang trung bì"
        ],
        answer: 0,
        explain: "Mặt cắt xéo qua lớp biểu mô trụ đơn hoặc giả tầng làm nhiều hàng nhân chồng chéo lên nhau dễ gây ảo giác giống biểu mô đa tầng; cần quan sát màng đáy và tế bào lớp nông nhất."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Tư duy nghiên cứu",
        q: "Một thuốc đường uống kích thước phân tử lớn (15.000 Da) không hấp thu được qua kẽ tế bào niêm mạc ruột vì bị chặn ở cực ngọn. Nếu nhà nghiên cứu muốn mở tạm thời hàng rào gian bào cực ngọn để tăng hấp thu qua kẽ tế bào, đích tác động hợp lý nhất là:",
        source: "Mô học Trần Công Toại – Mục V (tr. 31)",
        options: [
          "Protein cấu tạo Liên kết vòng bịt (Tight junction)",
          "Phức hợp connexon của Liên kết khe (Gap junction)",
          "Siêu sợi actin trong nhân tế bào",
          "Màng sụn lớp ngoài"
        ],
        answer: 0,
        explain: "Trang 31: Liên kết vòng bịt (Tight junction) là vùng liên kết khít ở cực ngọn như được may lại bởi các hàng protein, ngăn không cho các đại phân tử và ion vượt qua khe gian bào."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Biện luận bệnh sinh",
        q: "Ở bệnh nhân bị loét biểu mô giác mạc/da nhưng lớp mô đệm (mô liên kết) bên dưới còn nguyên vẹn giàu mạch máu, biểu mô lành lại nhanh chóng nhờ hai đặc tính sinh học nào của biểu mô?",
        source: "Mô học Trần Công Toại – Mục IV.2–3 (tr. 30–31)",
        options: [
          "Khả năng tái tạo mạnh của biểu mô phủ kết hợp nguồn dinh dưỡng thẩm thấu qua màng đáy từ mô đệm giàu mạch máu",
          "Biểu mô tự tạo mạch máu mới từ các hạt keratohyalin",
          "Liên kết khe biến tế bào sợi thành tế bào niệu",
          "Tế bào lớp sừng chết tự phục hồi nhân và phân bào"
        ],
        answer: 0,
        explain: "Trang 30–31: Biểu mô phủ có khả năng tái tạo mạnh và được nuôi dưỡng nhờ sự thẩm thấu chất dinh dưỡng từ mô liên kết qua màng đáy."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng lâm sàng",
        q: "Bệnh nhân nhiễm khuẩn đường tiêu hóa bị phá hủy lớp áo glycocalyx và ngắn cụt vi nhung mao (mâm khía) trên tế bào biểu mô ruột non. Rối loạn chức năng nào của biểu mô xảy ra trực tiếp?",
        source: "Mô học Trần Công Toại – Mục II.3 & IV.4 (tr. 20–21, 31)",
        options: [
          "Giảm mạnh diện tích bề mặt hấp thu chất dinh dưỡng dẫn đến tiêu chảy kém hấp thu",
          "Ngừng sản xuất hồng cầu tại mô biểu mô ruột",
          "Tăng tổng hợp hormon lipid vào mạch máu",
          "Biến đổi biểu mô ruột thành biểu mô lát tầng sừng hóa ngay lập tức"
        ],
        answer: 0,
        explain: "Trang 20–21 & 31: Vi nhung mao (mâm khía) có chức năng làm tăng diện tích bề mặt cực ngọn để hấp thu chất dinh dưỡng ở ruột non."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: PHÂN LOẠI BIỂU MÔ PHỦ (9 LOẠI KINH ĐIỂN)
  // Base (6): L1=1, L2=4, L3=1 | Extra (18): L1=5, L2=5, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  2: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Thuật ngữ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu trúc)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Soi biểu mô niệu" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Hai tiêu chí dùng để phân loại biểu mô phủ trong giáo trình Mô học là:",
        source: "Mô học Trần Công Toại – Mục II (tr. 19)",
        options: [
          "Số lượng lớp tế bào (đơn tầng vs đa tầng) và hình dạng của các tế bào biểu mô ở lớp nông nhất",
          "Nguồn gốc lá phôi và số lượng mạch máu bên trong biểu mô",
          "Kiểu chế tiết toàn vẹn/bán hủy và bản chất hóa học chất tiết",
          "Hình dạng tế bào ở lớp đáy và độ dày của màng đáy"
        ],
        answer: 0,
        explain: "Trang 19 (H.2.3): Dựa vào số lượng lớp tế bào (đơn tầng, đa tầng) và hình dạng các tế bào biểu mô ở LỚP NÔNG NHẤT (lát, vuông, trụ)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Thứ tự 5 lớp từ cực đáy lên cực đỉnh của biểu mô lát tầng sừng hóa ở da là:",
        source: "Mô học Trần Công Toại – Mục II.5 & Hình 2.8 (tr. 22–23)",
        options: [
          "Lớp đáy → Lớp gai → Lớp hạt → Lớp bóng → Lớp sừng",
          "Lớp đáy → Lớp hạt → Lớp gai → Lớp bóng → Lớp sừng",
          "Lớp sừng → Lớp bóng → Lớp hạt → Lớp gai → Lớp đáy",
          "Lớp đáy → Lớp trung gian → Lớp hình vợt → Lớp sừng"
        ],
        answer: 0,
        explain: "Trang 22: Từ cực đáy lên cực đỉnh gồm 5 lớp: lớp đáy (sinh sản) → lớp gai (thể liên kết) → lớp hạt (hạt keratohyalin) → lớp bóng (hạt eleidin) → lớp sừng (tế bào chết mất nhân)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Biểu mô lát tầng không sừng hóa lót mặt trong những cơ quan nào sau đây?",
        source: "Mô học Trần Công Toại – Mục II.6 (tr. 23)",
        options: [
          "Miệng, thực quản và âm đạo",
          "Da lòng bàn tay và da đầu",
          "Đài bể thận, niệu quản và bàng quang",
          "Khí quản, phế quản và vòi trứng"
        ],
        answer: 0,
        explain: "Trang 23 (II.6): Biểu mô lát tầng không sừng lót trong miệng, thực quản và âm đạo."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Biểu mô niệu (biểu mô đa dạng tầng / trung gian tầng) gặp ở vị trí duy nhất nào?",
        source: "Mô học Trần Công Toại – Mục II.9 (tr. 23)",
        options: [
          "Chỉ gặp trong các đường dẫn tiểu",
          "Chỉ gặp ở ống mào tinh và ống dẫn tinh",
          "Chỉ gặp ở thực quản và cổ ngoài cổ tử cung",
          "Chỉ gặp ở ống bài xuất tuyến nước bọt"
        ],
        answer: 0,
        explain: "Trang 23 (II.9): Biểu mô niệu chỉ gặp trong các đường dẫn tiểu (đài bể thận, niệu quản, bàng quang)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ở biểu mô lát tầng sừng hóa, tế bào lớp sừng bề mặt có đặc điểm gì?",
        source: "Mô học Trần Công Toại – Mục II.5 & Hình 2.8 (tr. 22–23)",
        options: [
          "Là các tế bào đã chết, mất nhân và hóa sừng",
          "Vẫn còn nhân dẹt nằm song song bề mặt",
          "Chứa đầy các giọt chất nhầy sáng P.A.S dương tính",
          "Có bờ bàn chải vi nhung mao hấp thu nước"
        ],
        answer: 0,
        explain: "Trang 22–23 (Hình 2.8): Lớp sừng và lớp bóng gồm các tế bào đã chết, mất nhân và hóa sừng."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)",
        q: "Điểm giống nhau giữa 'Trung biểu mô' (màng bụng, màng phổi, màng tim) và 'Nội mô' (thành mạch máu) là gì?",
        source: "Mô học Trần Công Toại – Mục II.1 (tr. 20)",
        options: [
          "Cả hai đều là biểu mô lát đơn và đều có nguồn gốc từ trung mô",
          "Cả hai đều là biểu mô vuông tầng có mê đạo đáy",
          "Cả hai đều có nguồn gốc từ ngoại bì phôi và hóa sừng",
          "Cả hai đều là biểu mô trụ giả tầng có lông chuyển"
        ],
        answer: 0,
        explain: "Trang 20: Màng bụng, màng phổi, màng tim (trung biểu mô) và mặt trong mạch máu (nội mô) đều được lợp bởi biểu mô lát đơn có nguồn gốc từ trung mô."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chức năng)",
        q: "Biểu mô trụ đơn lợp mặt trong dạ dày có cực đỉnh chứa một giọt chất nhầy lớn và sáng nhằm mục đích chính gì?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 20)",
        options: [
          "Bảo vệ niêm mạc dạ dày không bị tổn thương do HCl được tiết ra bởi các tuyến môn vị / tuyến vị",
          "Tăng diện tích bề mặt hấp thu lipid từ lòng dạ dày",
          "Vận chuyển bụi bẩn lên thực quản nhờ lông chuyển",
          "Tổng hợp trực tiếp hormon gastrin vào máu theo kiểu nội tiết"
        ],
        answer: 0,
        explain: "Trang 20: Giọt chất nhầy lớn sáng ở cực đỉnh biểu mô trụ đơn lợp mặt trong dạ dày giúp niêm mạc dạ dày không bị tổn thương do HCl."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo)",
        q: "Vì sao biểu mô trụ giả tầng có lông chuyển tạo cảm giác như biểu mô đa tầng trên lát cắt vi thể?",
        source: "Mô học Trần Công Toại – Mục II.4 (tr. 22)",
        options: [
          "Do tế bào trụ hình dáng khúc khuỷu cài xen nhau, nhân nằm ở nhiều độ cao khác nhau và có thêm các tế bào dự trữ nhỏ ở đáy",
          "Do có từ 5 đến 10 lớp tế bào chồng lên nhau tách rời hoàn toàn khỏi màng đáy",
          "Do lớp bề mặt gồm các tế bào hình vợt xếp vuông góc với trục biểu mô",
          "Do có xen kẽ các dải tế bào sợi và bó collagen týp I"
        ],
        answer: 0,
        explain: "Trang 22: Các tế bào trụ khúc khuỷu cài xen nhau khiến nhân nằm ở các độ cao khác nhau, cộng với sự hiện diện của tế bào dự trữ kích thước nhỏ chen giữa cực đáy, tạo cảm giác giả đa tầng dù mọi tế bào đều tựa chung trên 1 màng đáy."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Điểm khác nhau đặc trưng giữa biểu mô phủ vuông tầng và biểu mô phủ trụ tầng trên lát cắt ống bài xuất tuyến là gì?",
        source: "Mô học Trần Công Toại – Mục II.7–8 & Hình 2.10 (tr. 23–24)",
        options: [
          "Vuông tầng gồm nhiều lớp khối vuông (ống tuyến nước bọt, mồ hôi); Trụ tầng gồm 1–2 lớp khối vuông dưới và 1 lớp hình trụ ở bề mặt (ống bài xuất đường kính lớn)",
          "Vuông tầng chỉ có 1 lớp; Trụ tầng có lớp sừng hóa bề mặt",
          "Vuông tầng có lông giả; Trụ tầng chỉ gặp ở bao Bowman thận",
          "Vuông tầng nằm trong đường dẫn tiểu; Trụ tầng nằm ở màng phổi"
        ],
        answer: 0,
        explain: "Trang 23–24: Biểu mô vuông tầng gồm các lớp khối vuông (ống tuyến nước bọt, mồ hôi); biểu mô trụ tầng gồm 1–2 lớp vuông dưới và 1 lớp trụ bề mặt gặp ở các ống bài xuất đường kính lớn."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Soi tiêu bản",
        q: "Khi soi tiêu bản ống thận và lá ngoài bao Bowman của tiểu cầu thận dưới KHV quang học, hai loại biểu mô lần lượt thấy rõ nhất là:",
        source: "Mô học Trần Công Toại – Mục II.1–3 (tr. 20)",
        options: [
          "Lá ngoài bao Bowman: biểu mô lát đơn; Ống thận: biểu mô vuông đơn / trụ đơn có bờ bàn chải",
          "Lá ngoài bao Bowman: biểu mô niệu; Ống thận: biểu mô lát tầng sừng hóa",
          "Lá ngoài bao Bowman: biểu mô trụ giả tầng; Ống thận: biểu mô trụ tầng",
          "Cả hai cấu trúc đều lợp bởi biểu mô lát tầng không sừng hóa"
        ],
        answer: 0,
        explain: "Trang 20: Biểu mô lát đơn gặp ở lá ngoài bao Bowman và đoạn lên quai Henlé; biểu mô vuông đơn & trụ đơn (bờ bàn chải) gặp ở ống thận giữ chức năng hấp thu – tái hấp thu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận tiêu bản",
        q: "Quan sát một tiêu bản mô học thấy biểu mô gồm nhiều hàng tế bào: lớp đáy hình khối vuông, nhiều lớp giữa đa diện nhân lớn và lớp dẹt trên cùng VẪN CÒN NHÂN rõ rệt, không thấy hạt keratohyalin. Mẫu mô này nhiều khả năng lấy từ cơ quan nào?",
        source: "Mô học Trần Công Toại – Mục II.6 & Hình 2.9 (tr. 23–24)",
        options: [
          "Niêm mạc miệng, thực quản hoặc âm đạo (biểu mô lát tầng không sừng hóa)",
          "Biểu bì da gót chân (biểu mô lát tầng sừng hóa)",
          "Thành khí quản (biểu mô trụ giả tầng có lông chuyển)",
          "Thành bàng quang (biểu mô niệu)"
        ],
        answer: 0,
        explain: "Trang 23–24: Biểu mô lát tầng không sừng hóa gặp ở miệng, thực quản, âm đạo; có lớp đáy vuông, trung gian đa diện nhân lớn, bề mặt dẹt vẫn còn nhân và không có lớp hạt."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng thực tế",
        q: "Sinh thiết thành bàng quang ở hai trạng thái: mẫu A lúc bàng quang rỗng hoàn toàn, mẫu B lúc bàng quang căng đầy nước tiểu. Sự thay đổi hình thái rõ nhất quan sát được trên biểu mô niệu ở mẫu B so với mẫu A là:",
        source: "Mô học Trần Công Toại – Mục II.9 (tr. 23–24)",
        options: [
          "Lớp tế bào bề mặt cực lớn từ dạng phồng tròn bị ép dẹt mỏng lại để mở rộng diện tích lòng bàng quang",
          "Biểu mô chuyển thành biểu mô lát tầng sừng hóa có lớp hạt và lớp bóng",
          "Các tế bào hình vợt tách rời khỏi màng đáy và mọc thêm lông chuyển",
          "Xuất hiện thêm mạch máu xuyên qua màng đáy lên tới lớp bề mặt"
        ],
        answer: 0,
        explain: "Trang 24: Ở biểu mô niệu, lớp tế bào bề mặt rất lớn có cực đáy bị ấn lõm bởi tế bào dưới và sẽ BỊ ÉP DẸT khi lòng ống dẫn tiểu (bàng quang) bị căng đầy."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Chẩn đoán tiêu bản",
        q: "Trên một lát cắt dọc ống tiêu hóa (Hình 2.6), người ta nhận ra ngay đoạn này là RUỘT NON chứ không phải DẠ DÀY hay VÒI TRỨNG nhờ đặc điểm cực đỉnh nào của lớp biểu mô trụ đơn?",
        source: "Mô học Trần Công Toại – Mục II.3 & Hình 2.6 (tr. 20–22)",
        options: [
          "Có mâm khía (vi nhung mao đều mảnh) xen lẫn tế bào đài sáng, không có lớp chất nhầy đồng loạt ở mọi tế bào và không có lông chuyển",
          "Mọi tế bào đều chứa 1 giọt chất nhầy lớn ở cực đỉnh (lá tuyến)",
          "Cực đỉnh mang những vạch dọc dày, dài, thưa có cấu trúc 9 cặp siêu ống",
          "Cực đỉnh mọc nhánh dài cong queo phân nhánh bất động"
        ],
        answer: 0,
        explain: "Trang 20–22: Ruột non là biểu mô trụ đơn có mâm khía (vi nhung mao đều mảnh) + tế bào đài; dạ dày mọi tế bào cực đỉnh chứa giọt chất nhầy sáng (lá tuyến); vòi trứng có lông chuyển."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân biệt tiêu bản",
        q: "Làm thế nào phân biệt nhanh trên kính hiển vi giữa 'biểu mô lát tầng không sừng' (thực quản) và 'biểu mô niệu' (bàng quang)?",
        source: "Mô học Trần Công Toại – Mục II.6 & II.9 (tr. 23–25)",
        options: [
          "Thực quản: tế bào bề mặt dẹt nhỏ dần nhiều tầng; Bàng quang: tế bào bề mặt RẤT LỚN phồng tròn, lớp giữa có tế bào hình vợt",
          "Thực quản: có lông chuyển; Bàng quang: có lớp sừng hóa mất nhân",
          "Thực quản: có 1 lớp duy nhất; Bàng quang: có mê đạo đáy",
          "Thực quản: bắt màu đen khi ngấm bạc; Bàng quang: có hạt keratohyalin"
        ],
        answer: 0,
        explain: "Hình 2.9 vs 2.11: BM lát tầng không sừng có tế bào dẹt dần về bề mặt; BM niệu có tế bào bề mặt phồng rất lớn ấn lõm trên lớp tế bào hình vợt."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đọc hình 2.8",
        q: "Khi đặt vật kính 40x vào vùng ranh giới giữa lớp gai và lớp hạt của biểu mô lát tầng sừng hóa ở da, hai chi tiết mô học đặc trưng nhất quan sát được lần lượt là:",
        source: "Mô học Trần Công Toại – Mục II.5 & Hình 2.8 (tr. 22–23)",
        options: [
          "Ở lớp gai: tế bào đa diện nối nhau bằng các cầu nối gai (thể liên kết); ở lớp hạt: xuất hiện nhiều hạt keratohyalin bắt màu ưa baz trong bào tương",
          "Ở lớp gai: tế bào chết mất nhân; ở lớp hạt: có vi nhung mao",
          "Ở lớp gai: 1 hàng tế bào khối vuông; ở lớp hạt: hạt eleidin trong suốt",
          "Ở lớp gai: tế bào hình vợt; ở lớp hạt: sợi collagen týp II"
        ],
        answer: 0,
        explain: "Trang 22 & Hình 2.8: Lớp gai gồm tế bào đa diện liên kết nhau bằng các thể liên kết có dạng gai; lớp hạt chứa hạt ưa baz trong bào tương gọi là hạt keratohyalin."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ bệnh lý",
        q: "Ở người hút thuốc lá lâu năm, biểu mô trụ giả tầng có lông chuyển ở phế quản có thể chuyển sản thành biểu mô lát tầng để chịu đựng khói bụi kích thích. Hậu quả chức năng hô hấp tất yếu của sự biến đổi này là gì?",
        source: "Mô học Trần Công Toại – Mục II.4 & IV.4 (tr. 22, 31)",
        options: [
          "Mất lông chuyển và tế bào đài tiết nhầy nên mất khả năng quét đẩy bụi, dễ ứ đọng đàm và nhiễm khuẩn hô hấp",
          "Tăng mạnh tốc độ vận chuyển bụi ra khỏi đường thở",
          "Biểu mô mọc thêm mạch máu trực tiếp vào lòng phế quản",
          "Tăng hấp thu chất dinh dưỡng thay thế ruột non"
        ],
        answer: 0,
        explain: "Chức năng vận chuyển bụi của biểu mô đường hô hấp (tr. 31) do lông chuyển trên biểu mô trụ giả tầng đảm nhiệm; mất lông chuyển làm ứ đọng bụi và vi khuẩn."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng lâm sàng",
        q: "Vì sao tổn thương bỏng gây mất hoàn toàn lớp sừng và lớp hạt nhưng vẫn còn nguyên lớp đáy biểu bì thì da có khả năng tự tái tạo phục hồi toàn bộ biểu bì mà không để lại sẹo xơ sâu?",
        source: "Mô học Trần Công Toại – Mục II.5 & IV.3 (tr. 22, 31)",
        options: [
          "Vì lớp đáy là lớp sinh sản tựa trên màng đáy còn nguyên vẹn, phân bào tái tạo mạnh đẩy lên thay thế đủ 5 lớp trên",
          "Vì lớp bóng chứa hạt eleidin tự biến thành tế bào gốc đa năng",
          "Vì tế bào chết lớp sừng tự phục hồi nhân và phân chia",
          "Vì mạch máu trong biểu mô da nuôi sống lớp gai trực tiếp"
        ],
        answer: 0,
        explain: "Trang 22: Lớp đáy là một hàng tế bào khối vuông tựa trên màng đáy giữ vai trò LỚP SINH SẢN có nhiệm vụ tái tạo biểu mô phủ."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Biện luận bệnh sinh",
        q: "Khi dùng thuốc kháng viêm hoặc hóa chất ăn mòn làm mất lớp chất nhầy trên bề mặt biểu mô trụ đơn dạ dày, lớp biểu mô này bị loét trực tiếp bởi tác nhân nội sinh nào?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 20)",
        options: [
          "Acid HCl được tiết ra trong lòng dạ dày (tác dụng bảo vệ chính của giọt chất nhầy sáng cực đỉnh bị mất)",
          "Sợi elastin từ động mạch chủ khuếch tán qua màng đáy",
          "Tinh thể hydroxyapatite từ xương ức",
          "Hạt keratohyalin từ tuyến môn vị"
        ],
        answer: 0,
        explain: "Trang 20: Giọt chất nhầy lớn sáng ở cực đỉnh tế bào biểu mô trụ đơn lợp mặt trong dạ dày giúp niêm mạc dạ dày không bị tổn thương do HCl."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: BIỂU MÔ TUYẾN (NGOẠI TIẾT, KIỂU CHẾ TIẾT & NỘI TIẾT)
  // Base (6): L1=2, L2=3, L3=1 | Extra (18): L1=4, L2=6, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  3: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu trúc)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt ống tuyến" },
      { level: 3, ksa: "S", ksaLabel: "S3: Nhận diện tuyến nội tiết" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Năm loại tuyến ngoại tiết theo cách phân loại của giáo trình Mô học gồm:",
        source: "Mô học Trần Công Toại – Mục III.1 (tr. 25)",
        options: [
          "Các tế bào tuyến biệt lập, lá tuyến, tuyến trong biểu mô, tuyến ống và tuyến túi",
          "Tế bào đài, tuyến môn vị, tuyến mồ hôi, tuyến bã và tuyến thượng thận",
          "Tuyến đơn bào, tuyến đa bào, tuyến nội tiết, tuyến pha và tuyến tụy",
          "Nang nước, nang nhầy, nang pha, liềm Gianuzzi và tế bào ưa bạc"
        ],
        answer: 0,
        explain: "Trang 25: Có năm loại tuyến ngoại tiết: các tế bào tuyến biệt lập, lá tuyến, tuyến trong biểu mô, tuyến ống và tuyến túi (ba loại đầu nằm trong biểu mô và tạo bởi tế bào tiết nhầy)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ba phần cấu tạo dọc của một tuyến ống đơn (ví dụ tuyến Lieberkühn ở ruột) lần lượt từ trên xuống dưới là:",
        source: "Mô học Trần Công Toại – Mục III.1.4 (tr. 27)",
        options: [
          "Cổ tuyến, thân tuyến và đáy tuyến",
          "Lớp đáy, lớp gai và lớp sừng",
          "Phần bài xuất, phần trung gian và phần màng đáy",
          "Ổ tuyến, cầu tuyến và liềm Gianuzzi"
        ],
        answer: 0,
        explain: "Trang 27: Tuyến Lieberkühn gồm ba phần: cổ tuyến (nối biểu mô phủ), thân tuyến (nằm giữa) và đáy tuyến (túi bịt dưới cùng)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ví dụ điển hình cho 3 kiểu chế tiết: Toàn vẹn, Bán hủy và Toàn hủy lần lượt là:",
        source: "Mô học Trần Công Toại – Mục III.1.5 (tr. 29)",
        options: [
          "Toàn vẹn: nang tuyến tụy; Bán hủy: tuyến vú & một số tuyến mồ hôi nách; Toàn hủy: tuyến bã",
          "Toàn vẹn: tuyến bã; Bán hủy: tuyến tụy; Toàn hủy: tuyến nước bọt",
          "Toàn vẹn: tuyến sữa; Bán hủy: tuyến Lieberkühn; Toàn hủy: tuyến môn vị",
          "Toàn vẹn: tuyến thượng thận; Bán hủy: tuyến giáp; Toàn hủy: tuyến yên"
        ],
        answer: 0,
        explain: "Trang 29: Toàn vẹn gặp trong các nang tuyến tụy; Bán hủy gặp trong các tuyến vú, một số tuyến mồ hôi ở nách; Toàn hủy điển hình là tuyến bã ở da."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Các tế bào tuyến nội tiết biệt lập nằm trong các tuyến Lieberkühn ở ống tiêu hóa được phát hiện dễ dàng nhờ kỹ thuật nhuộm nào?",
        source: "Mô học Trần Công Toại – Mục III.2 (tr. 30)",
        options: [
          "Kỹ thuật nhuộm bạc (do sản phẩm chế tiết có ái tính cao với muối nitrat bạc)",
          "Kỹ thuật nhuộm aldehyde fuchsin (bắt màu tím)",
          "Kỹ thuật nhuộm P.A.S (bắt màu đỏ)",
          "Kỹ thuật nhuộm xanh trypan sống"
        ],
        answer: 0,
        explain: "Trang 30: Các tế bào tuyến nội tiết biệt lập trong tuyến Lieberkühn có sản phẩm chế tiết ái tính cao với muối nitrat bạc nên dễ dàng phát hiện bằng kỹ thuật nhuộm bạc."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Vì sao chất nhầy trong tế bào tuyến nhầy trông 'sáng' trên tiêu bản nhuộm H&E thông thường nhưng lại bắt màu đỏ rõ trên tiêu bản nhuộm P.A.S?",
        source: "Mô học Trần Công Toại – Mục III.1 (tr. 24–25)",
        options: [
          "Vì chất nhầy ít bắt màu các phẩm nhuộm thường nhưng chứa nhiều glucid có ái tính cao với thuốc nhuộm P.A.S (Periodic Acid Schiff)",
          "Vì chất nhầy chứa toàn bộ lipid nguyên chất hòa tan khi ngâm xylen",
          "Vì chất nhầy chứa nhiều sợi collagen týp III ái bạc",
          "Vì chất nhầy chỉ nằm trong nhân tế bào ở cực đáy"
        ],
        answer: 0,
        explain: "Trang 24–25: Cực đỉnh chứa các giọt chất nhầy sáng do chất nhầy ít bắt màu với kỹ thuật nhuộm thông thường; nhưng cấu tạo chứa nhiều glucid nên bắt màu đỏ khi nhuộm P.A.S."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Sự thay đổi hình dạng nhân của tế bào tiết nhầy phụ thuộc trực tiếp vào yếu tố nào?",
        source: "Mô học Trần Công Toại – Mục III.1 (tr. 24–25)",
        options: [
          "Lượng chất nhầy tích trữ: nhiều chất nhầy làm nhân bị ép dẹt sát cực đáy; ít chất nhầy thì nhân vẫn còn tròn hoặc bầu dục",
          "Áp lực nước tiểu làm nhân biến thành hình vợt",
          "Số lượng ty thể trong tế bào mỡ nâu",
          "Sự xuất hiện hạt keratohyalin ở cực đỉnh"
        ],
        answer: 0,
        explain: "Trang 25: Nếu tế bào chứa nhiều chất nhầy, nhân sẽ bị ép dẹt về phía cực đáy; nếu chứa ít chất nhầy hơn, nhân vẫn có hình tròn hoặc bầu dục."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)",
        q: "So sánh cấu tạo nhân và bào tương giữa tế bào nang tiết NƯỚC với tế bào nang tiết NHẦY (tr. 28):",
        source: "Mô học Trần Công Toại – Mục III.1.5 (tr. 28)",
        options: [
          "Nang nước: nhân tròn lệch về cực đáy, cực đỉnh dạng hạt chế tiết, đáy ái kiềm; Nang nhầy: nhân dẹt nằm sát cực đáy, cực đỉnh đầy giọt chất nhầy sáng",
          "Nang nước: nhân dẹt sát đáy; Nang nhầy: nhân tròn nằm giữa tế bào không phân cực",
          "Nang nước: mất nhân hoàn toàn; Nang nhầy: đa nhân khổng lồ",
          "Cả hai đều có bào tương nhiều không bào nhỏ đồng đều giống tế bào tiết lipid"
        ],
        answer: 0,
        explain: "Trang 28: Nang nước gồm TB hình tháp nhân tròn lệch đáy, cực đỉnh hạt chế tiết; Nang nhầy gồm TB hình tháp nhân dẹt nằm sát cực đáy, cực đỉnh đầy giọt chất nhầy."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)",
        q: "Trong các nhóm tuyến ống ngoại tiết, tuyến môn vị dạ dày và tuyến Brunner tá tràng khác nhau như thế nào?",
        source: "Mô học Trần Công Toại – Mục III.1.4 (tr. 27)",
        options: [
          "Tuyến môn vị là tuyến ống chia nhánh (nhiều ống ngắn nối vào 1 cổ chung); Tuyến Brunner là tuyến ống phức tạp (đầu trên thông tuyến Lieberkühn, đầu dưới phân nhánh nhiều lần)",
          "Tuyến môn vị là tuyến nội tiết không ống dẫn; Tuyến Brunner là tuyến trong biểu mô",
          "Tuyến môn vị là tuyến ống cong queo; Tuyến Brunner là tế bào đài biệt lập",
          "Tuyến môn vị tiết toàn hủy; Tuyến Brunner tiết bán hủy"
        ],
        answer: 0,
        explain: "Trang 27: Tuyến môn vị là tuyến ống chia nhánh (nhiều ống ngắn ngoằn ngoèo thông nối qua một cổ chung); Tuyến Brunner là tuyến ống phức tạp (đầu trên thông Lieberkühn, đầu dưới phân nhánh nhiều lần)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phôi thai)",
        q: "Tại sao tuyến nội tiết KHÔNG có hệ thống ống bài xuất còn tuyến ngoại tiết lại CÓ?",
        source: "Mô học Trần Công Toại – Mục III.2 (tr. 29)",
        options: [
          "Vì cả hai đều do biểu mô phủ lõm xuống mô đệm, nhưng ở tuyến nội tiết mối liên hệ với biểu mô phủ bị mất đi trong quá trình phát triển phôi",
          "Vì tuyến nội tiết phát triển từ mô xương chứ không phải biểu mô",
          "Vì ống bài xuất của tuyến nội tiết bị hóa sừng bít lại sau khi dậy thì",
          "Vì tuyến ngoại tiết không bao giờ tiếp xúc với mao mạch máu"
        ],
        answer: 0,
        explain: "Trang 29: Tuyến nội tiết cũng tạo thành do biểu mô phủ lõm sâu xuống mô đệm, nhưng vì mối liên hệ với biểu mô phủ bị mất đi trong phát triển phôi nên không có ống bài xuất."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)",
        q: "Ba kiểu sắp xếp tế bào của tuyến nội tiết gồm:",
        source: "Mô học Trần Công Toại – Mục III.2 (tr. 30)",
        options: [
          "Các tế bào tuyến biệt lập, đám tế bào tuyến và cơ quan nội tiết",
          "Lá tuyến, tuyến trong biểu mô và tuyến ống cong queo",
          "Nang nước, nang nhầy và nang pha",
          "Toàn vẹn, bán hủy và toàn hủy"
        ],
        answer: 0,
        explain: "Trang 30: Tùy theo cách sắp xếp của tế bào, phân biệt ba loại tuyến nội tiết: các tế bào tuyến biệt lập, đám tế bào tuyến và cơ quan nội tiết."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Soi tiêu bản",
        q: "Trên lát cắt mô học một tuyến nước bọt, thấy một nang tuyến gồm phần lớn các tế bào có bào tương sáng bọt với nhân bị ép dẹt sát đáy, và ôm bên rìa ngoài nang này có một dải tế bào hình liềm bắt màu sẫm tím hơn chứa nhân tròn. Chẩn đoán mô học đúng nhất là:",
        source: "Mô học Trần Công Toại – Mục III.1.5 & Hình 2.21 (tr. 29)",
        options: [
          "Nang pha với phần lõi tế bào tiết nhầy và liềm bán nguyệt Gianuzzi gồm các tế bào tiết nước",
          "Nang nước thuần túy đang tiết theo kiểu toàn hủy",
          "Tuyến mồ hôi cong queo với phần bài xuất vuông kép",
          "Cơ quan nội tiết vỏ thượng thận nhiều không bào lipid"
        ],
        answer: 0,
        explain: "Trang 29 & Hình 2.21: Nang pha gặp ở một số tuyến nước bọt gồm chủ yếu TB tiết nhầy (sáng, nhân dẹt đáy) và TB tiết nước xếp thành liềm bán nguyệt Gianuzzi bao quanh ngoài."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận phân biệt",
        q: "Soi vùng hạ bì da thấy hai cụm cấu trúc ống nằm gần nhau: Cụm (X) thành gồm 1 lớp tế bào vuông bào tương sáng và nhân tròn; Cụm (Y) lòng hẹp hơn, thành gồm 2 lớp tế bào khối vuông bắt màu sẫm hơn. X và Y tương ứng là phần nào của tuyến mồ hôi?",
        source: "Mô học Trần Công Toại – Mục III.1.4 & Hình 2.19 (tr. 28)",
        options: [
          "X là phần chế tiết (ống cong queo); Y là phần bài xuất (biểu mô vuông kép)",
          "X là phần bài xuất; Y là tuyến bã tiết toàn hủy",
          "X là tuyến nội tiết biệt lập; Y là nang pha có liềm Gianuzzi",
          "X là tuyến Lieberkühn; Y là tuyến Brunner"
        ],
        answer: 0,
        explain: "Trang 28 & Hình 2.19: Ở tuyến mồ hôi (tuyến ống cong queo), phần bài xuất có thành là biểu mô vuông kép (2 lớp), còn phần chế tiết có thành là 1 lớp tế bào vuông nhân tròn bào tương sáng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đọc tiêu bản",
        q: "Khi quan sát một tuyến ngoại tiết đang chế tiết tích cực nhưng thấy ở vùng đáy tuyến có rất nhiều tế bào đang phân chia gián phân, còn các tế bào ở trung tâm lòng nang dần tan rã vỡ màng biến mất nhân hòa lẫn vào chất tiết. Đây là đặc trưng của:",
        source: "Mô học Trần Công Toại – Mục III.1.5 & Hình 2.23 (tr. 29–30)",
        options: [
          "Kiểu chế tiết toàn hủy (gặp ở tuyến bã da)",
          "Kiểu chế tiết toàn vẹn (gặp ở nang tụy)",
          "Kiểu chế tiết bán hủy (gặp ở tuyến vú)",
          "Tuyến nội tiết tiết hormon protein"
        ],
        answer: 0,
        explain: "Hình 2.23 (tr. 30): Trong kiểu chế tiết toàn hủy, toàn bộ tế bào tích tụ sản phẩm rồi tách ra giải phóng toàn bộ chất bên trong thành chất tiết, đồng thời lớp đáy phải gián phân liên tục để thay thế tế bào."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng phân loại",
        q: "Dựa vào đặc điểm 'tất cả tế bào của biểu mô phủ trụ đơn đều biệt hóa thành tế bào tiết nhầy', lớp biểu mô lợp bề mặt trong dạ dày và cổ trong cổ tử cung vừa được xếp là biểu mô phủ trụ đơn, vừa được gọi là loại tuyến ngoại tiết nào?",
        source: "Mô học Trần Công Toại – Mục III.1.2 & Hình 2.14 (tr. 25–26)",
        options: [
          "Lá tuyến",
          "Tuyến trong biểu mô",
          "Tế bào tuyến biệt lập",
          "Tuyến ống đơn thẳng"
        ],
        answer: 0,
        explain: "Trang 25 (1.2): Khi tất cả tế bào của biểu mô phủ trụ đơn biệt hóa thành tế bào tiết nhầy thì biểu mô này đồng thời là một loại tuyến ngoại tiết gọi là LÁ TUYẾN (gặp ở dạ dày và cổ trong cổ tử cung)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng siêu cấu trúc",
        q: "Một tuyến nội tiết có nhiệm vụ tiết hormon bản chất PROTEIN (như insulin tế bào beta tụy hoặc hormon tuyến yên) sẽ có hình thái bào tương tế bào tuyến khác với tuyến tiết hormon LIPID như thế nào?",
        source: "Mô học Trần Công Toại – Mục III.2 (tr. 30)",
        options: [
          "Tuyến tiết protein có bào tương DẠNG HẠT (và giàu LNBH); tuyến tiết lipid có bào tương chứa NHIỀU KHÔNG BÀO NHỎ, KÍCH THƯỚC ĐỒNG ĐỀU",
          "Tuyến tiết protein có 1 giọt khổng lồ ép dẹt nhân; tuyến tiết lipid có cực đỉnh chứa hạt keratohyalin",
          "Tuyến tiết protein phân cực cực đỉnh–đáy rất rõ đổ vào ống dẫn; tuyến tiết lipid mất nhân",
          "Cả hai đều có cấu trúc hoàn toàn giống nang nhầy bắt màu đỏ P.A.S"
        ],
        answer: 0,
        explain: "Trang 30: Khi hormon có bản chất protein, tế bào tuyến nội tiết có bào tương dạng hạt; khi hormon là lipid, bào tương chứa nhiều không bào nhỏ, kích thước đồng đều (vì lipid tan đi khi làm tiêu bản)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng kỹ thuật",
        q: "Khi xử lý tiêu bản mô tuyến thượng thận vỏ bằng kỹ thuật khử nước cồn và làm trong xylen để quan sát mô học, vì sao bào tương tế bào tuyến lại hiện ra nhiều không bào nhỏ trống rỗng?",
        source: "Mô học Trần Công Toại – Mở đầu & Biểu mô (tr. 9, 24, 30)",
        options: [
          "Vì hormon vỏ thượng thận bản chất là lipid nên bị cồn và xylen hòa tan rửa trôi trong quá trình khử nước – làm trong, để lại các không bào nhỏ đồng đều",
          "Vì đây là tuyến ngoại tiết toàn hủy làm vỡ hết bào tương",
          "Vì các không bào này chứa không khí từ đường hô hấp",
          "Vì thuốc nhuộm hematoxylin làm tan mất các hạt protein"
        ],
        answer: 0,
        explain: "Kết hợp kiến thức kỹ thuật tiêu bản (tr. 9) và tuyến nội tiết tiết lipid (tr. 24, 30): các giọt lipid nhỏ đồng đều bị dung môi hữu cơ (cồn, xylen) hòa tan khi xử lý paraffin để lại nhiều không bào nhỏ sáng đồng đều."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ lâm sàng",
        q: "Phụ nữ sau sinh cho con bú có tuyến sữa tiết cả protein (casein), lipid (giọt sữa) và hydrat cacbon (lactose). Sự mất mát một phần bào tương cực đỉnh khi tiết sữa tương ứng với kiểu chế tiết nào của tuyến vú?",
        source: "Mô học Trần Công Toại – Mục III.1 & III.1.5 (tr. 24, 29)",
        options: [
          "Kiểu chế tiết bán hủy (Apocrine) – đặc biệt với thành phần giọt lipid sữa",
          "Kiểu chế tiết toàn hủy (Holocrine)",
          "Kiểu tuyến nội tiết tiết thẳng vào mao mạch",
          "Kiểu tuyến trong biểu mô trụ giả tầng"
        ],
        answer: 0,
        explain: "Trang 24 & 29: Riêng tuyến sữa tiết cả 3 loại chất (protein, lipid, hydrat cacbon), và tuyến vú là ví dụ kinh điển trong sách cho kiểu chế tiết bán hủy (tiết không liên tục, giải phóng khối chất tiết cùng một phần bào tương cực đỉnh)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Đọc kết quả xét nghiệm",
        q: "Trong chẩn đoán bệnh lý dạ dày – tá tràng, nếu bác sĩ giải phẫu bệnh nhuộm mẫu sinh thiết niêm mạc bằng kỹ thuật P.A.S thấy bắt màu đỏ rực toàn bộ cực đỉnh lớp biểu mô phủ bề mặt và các tuyến ống chia nhánh vùng hang môn vị, điều này phản ánh thành phần hóa học gì bình thường?",
        source: "Mô học Trần Công Toại – Mục III.1 (tr. 25, 27)",
        options: [
          "Chất nhầy giàu glucid bình thường của lá tuyến bề mặt dạ dày và tuyến môn vị",
          "Sợi lưới collagen týp III xâm nhập bất thường lên biểu mô",
          "Tế bào nội tiết ái bạc tăng sinh ác tính",
          "Tinh thể canxi phốt phát lắng đọng do thiếu vitamin D"
        ],
        answer: 0,
        explain: "Trang 25 & 27: P.A.S bắt màu đỏ đặc hiệu các phân tử glucid có nhiều trong chất nhầy của lá tuyến bề mặt dạ dày và tuyến môn vị (tuyến ống chia nhánh tiết nhầy)."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: ĐẠI CƯƠNG MÔ LIÊN KẾT & 9 LOẠI TẾ BÀO MÔ LIÊN KẾT
  // Base (6): L1=1, L2=5 | Extra (18): L1=5, L2=4, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  4: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chức năng)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hệ thực bào)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế IgE)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Nguyên bào sợi)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ba thành phần cấu tạo cơ bản trong định nghĩa Mô liên kết là:",
        source: "Mô học Trần Công Toại – Mục I (tr. 33)",
        options: [
          "Các tế bào liên kết, sợi liên kết và chất căn bản (hai thành phần sau hợp thành chất nền ngoại bào)",
          "Các tế bào liên kết, màng đáy và ống bài xuất",
          "Biểu mô phủ, sợi keratin và các hạt eleidin",
          "Tế bào sụn, ống Havers và tuyến nội tiết"
        ],
        answer: 0,
        explain: "Trang 33: Mô liên kết có cấu tạo gồm 3 thành phần: các tế bào liên kết, sợi liên kết và chất căn bản; hai thành phần sau kết hợp tạo thành chất nền ngoại bào."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Trong 5 loại mô cơ bản, mô liên kết có nguồn gốc phôi thai chủ yếu từ đâu?",
        source: "Mô học Trần Công Toại – Mục I (tr. 33)",
        options: [
          "Từ trung bì phôi, trừ một số ở vùng đầu có thể bắt nguồn từ ngoại bì mào thần kinh",
          "Hoàn toàn từ nội bì phôi",
          "Chỉ từ ngoại bì da",
          "Từ cả ba lá phôi với tỷ lệ ngang nhau như biểu mô"
        ],
        answer: 0,
        explain: "Trang 33: Mô liên kết có nguồn gốc từ trung bì phôi, trừ một số ở vùng đầu có thể bắt nguồn từ ngoại bì mào thần kinh."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Bốn loại mô liên kết chuyên biệt được liệt kê trong giáo trình gồm:",
        source: "Mô học Trần Công Toại – Mục I (tr. 33)",
        options: [
          "Mô lưới, mô mỡ, mô sụn và mô xương",
          "Mô nhầy, mô thưa, mô đặc và mô chun",
          "Biểu mô phủ, biểu mô tuyến, mô cơ và mô thần kinh",
          "Mô máu, mô bạch huyết, mô sụn và biểu mô niệu"
        ],
        answer: 0,
        explain: "Trang 33: Mô liên kết chuyên biệt có cấu trúc và chức năng rất đặc biệt gồm: mô lưới, mô mỡ, mô sụn và mô xương."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Bốn hoạt chất sinh học chứa trong các hạt ái kiềm lớn của Masto bào là:",
        source: "Mô học Trần Công Toại – Mục II.1.e (tr. 37)",
        options: [
          "Histamin, protease, ECF-A và heparin",
          "Collagen, elastin, fibronectin và actin",
          "Keratin, keratohyalin, eleidin và melanin",
          "Hemosiderin, osteonectin, hydroxyapatite và PTH"
        ],
        answer: 0,
        explain: "Trang 37: Các hạt ái kiềm của masto bào chứa histamin, protease, ECF-A (eosinophil chemotactic factor of anaphylaxis) và heparin."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Tên gọi riêng của các đại thực bào tại chỗ nằm ở gan, lách và phổi lần lượt là:",
        source: "Mô học Trần Công Toại – Mục II.1.c (tr. 35)",
        options: [
          "Gan: tế bào Kupffer; Lách: đại thực bào tiêu hồng cầu chứa hemosiderin; Phổi: tế bào bụi",
          "Gan: tế bào bụi; Lách: tế bào Kupffer; Phổi: tế bào Leydig",
          "Gan: tương bào; Lách: masto bào; Phổi: chu bào",
          "Gan: tế bào trung mô; Lách: nguyên bào sợi; Phổi: tế bào nội mô"
        ],
        answer: 0,
        explain: "Trang 35: Ở gan là tế bào Kupffer dọc thành mao mạch nan hoa; ở lách chứa nhiều thể vùi sắc tố hemosiderin do tiêu hủy hồng cầu già; ở phổi là tế bào bụi."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Nhóm 5 tế bào CỐ ĐỊNH có đời sống tương đối dài của mô liên kết và nhóm 3 tế bào từ MÁU đi vào mô liên kết lần lượt là:",
        source: "Mô học Trần Công Toại – Mục II.1 (tr. 34)",
        options: [
          "Cố định: TB trung mô, nguyên bào sợi – TB sợi, chu bào, TB nội mô; Từ máu: đại thực bào, tương bào, masto bào",
          "Cố định: đại thực bào, tương bào, masto bào; Từ máu: TB trung mô, nguyên bào sợi, chu bào",
          "Cố định: tế bào Leydig, tế bào bụi, tế bào đài; Từ máu: tế bào sợi, tế bào nội mô",
          "Tất cả 9 loại tế bào mô liên kết đều di chuyển từ máu vào"
        ],
        answer: 0,
        explain: "Trang 34: Tế bào trung mô, nguyên bào sợi – tế bào sợi, chu bào, tế bào nội mô là các tế bào cố định có đời sống tương đối dài; đại thực bào, tương bào, masto bào là tế bào máu đi vào mô liên kết (ngoài ra có TB sắc tố và TB mỡ)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Siêu cấu trúc)",
        q: "Vì sao bào tương của Tương bào bắt màu RẤT ÁI KIỀM khi nhuộm H&E và thường thấy một vùng sáng cạnh nhân?",
        source: "Mô học Trần Công Toại – Mục II.1.d & Hình 3.7 (tr. 37)",
        options: [
          "Ái kiềm do hệ thống lưới nội bào hạt (tổng hợp globulin miễn dịch) phát triển mạnh; vùng sáng cạnh nhân là vị trí hệ Golgi phát triển mạnh",
          "Ái kiềm do chứa nhiều giọt lipid trung tính; vùng sáng là không bào thực bào",
          "Ái kiềm do chứa nhiều hạt keratohyalin; vùng sáng là siêu sợi keratin",
          "Ái kiềm do hạt hemosiderin; vùng sáng là tinh thể hydroxyapatite"
        ],
        answer: 0,
        explain: "Trang 37: Tính ái kiềm của tương bào là do lưới nội bào hạt phát triển mạnh để tổng hợp và tích trữ globulin miễn dịch; hệ Golgi cũng rất phát triển nằm cạnh nhân."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)",
        q: "Điểm giống và khác nhau về hình thái cấu tạo giữa Chu bào và Tế bào nội mô trong thành mao mạch là gì?",
        source: "Mô học Trần Công Toại – Mục II.1.f–g & Hình 3.9 (tr. 37–38)",
        options: [
          "Tế bào nội mô (75–150 µm, rất mỏng, nhiều không bào/ẩm bào) lót MẶT TRONG mạch máu; Chu bào là tế bào trung mô nằm NGOÀI mao mạch ngăn cách với nội mô qua 1 màng đáy, giúp điều chỉnh lòng mạch",
          "Chu bào lót mặt trong lòng mạch máu; tế bào nội mô nằm ngoài lớp vỏ bao cơ quan",
          "Cả hai đều là tế bào từ dòng mono bào xuyên mạch để thực bào hồng cầu già",
          "Chu bào chỉ gặp ở phôi thai; tế bào nội mô không bao giờ có màng đáy"
        ],
        answer: 0,
        explain: "Trang 37–38: Chu bào là tế bào trung mô nằm gần mao mạch, ngăn cách với TB nội mô qua 1 màng đáy và có tận cùng thần kinh giúp điều chỉnh lòng mao mạch; TB nội mô lót mặt trong mạch máu (75–150 µm, mỏng, giàu ẩm bào)."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Đọc hình tiêu bản",
        q: "Dựa vào Hình 3.20 (tr. 44), đặc điểm hình thái nào giúp phân biệt nhanh Tương bào với Masto bào dưới kính hiển vi?",
        source: "Mô học Trần Công Toại – Hình 3.7, 3.8 & 3.20 (tr. 37, 44)",
        options: [
          "Tương bào có nhân tròn nằm LỆCH MỘT PHÍA với chất nhiễm sắc cô đặc thành đám bám màng nhân; Masto bào (>20 µm) có nhân tròn ở giữa và bào tương chứa đầy HẠT ÁI KIỀM LỚN",
          "Tương bào có đường kính >100 µm đa nhân; Masto bào có viền chân giả thực bào bụi than",
          "Tương bào chứa 1 giọt mỡ lớn ép dẹt nhân; Masto bào chứa sắc tố melanin",
          "Cả hai đều có hình thoi nhọn hai đầu nằm xen trong bó gân"
        ],
        answer: 0,
        explain: "Trang 37 & Hình 3.20: Tương bào (nhân lệch 1 phía, chất nhiễm sắc cô đặc bám màng nhân, bào tương ái kiềm không hạt to); Masto bào (gần mạch máu, >20 µm, nhân tròn giữa, bào tương chứa đầy hạt ái kiềm lớn)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng miễn dịch",
        q: "Một người bị dị ứng hải sản lần đầu ăn tôm thì không có biểu hiện lâm sàng nặng, nhưng đến lần thứ hai ăn lại bị nổi mề đay, tụt huyết áp và co thắt phế quản cấp. Chuỗi sự kiện tế bào nào ở mô liên kết đã xảy ra?",
        source: "Mô học Trần Công Toại – Mục II.1.e & Hình 3.8 (tr. 37–38)",
        options: [
          "Lần 1 lympho tạo IgE gắn lên thụ thể bề mặt Masto bào; lần 2 kháng nguyên gắn vào IgE làm masto bào giải phóng histamin gây giãn mạch, tăng tính thấm thành mạch và co thắt cơ trơn",
          "Lần 1 nguyên bào sợi tổng hợp quá mức sợi collagen týp I; lần 2 hủy cốt bào tiêu xương",
          "Lần 1 đại thực bào tại gan giải phóng hemosiderin; lần 2 tế bào nội mô tự vỡ tan",
          "Lần 1 tế bào trung mô biến thành tế bào mỡ nâu; lần 2 chu bào bít kín hoàn toàn động mạch chủ"
        ],
        answer: 0,
        explain: "Trang 37–38: Cơ chế dị ứng kinh điển qua trung gian IgE – Masto bào: lần 1 lympho tạo IgE gắn lên thụ thể bề mặt masto bào; lần 2 kháng nguyên gắn IgE giải phóng hạt (histamin làm giãn mạch, tăng tính thấm, co thắt cơ trơn)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng bệnh học",
        q: "Tại một ổ áp-xe mô liên kết dưới da có nhiều vi khuẩn và mảnh vụn tế bào hoại tử, soi kính hiển vi điện tử thấy nhiều tế bào đường viền không đều chứa các túi thực bào cực lớn và không đồng nhất về hình dạng, kích thước, mật độ. Tế bào này là loại nào và có nguồn gốc từ đâu?",
        source: "Mô học Trần Công Toại – Mục II.1.c & Hình 3.4–3.5 (tr. 35–36)",
        options: [
          "Đại thực bào viêm – có nguồn gốc từ mono bào trong máu xuyên mạch vào mô và từ đại thực bào tại chỗ",
          "Tế bào sợi trưởng thành – có nguồn gốc từ tế bào biểu mô lớp gai",
          "Tương bào – có nguồn gốc từ tế bào trung mô không qua dòng máu",
          "Tế bào sắc tố – có nguồn gốc từ ngoại bì mào thần kinh"
        ],
        answer: 0,
        explain: "Trang 35–36: Đại thực bào viêm xuất phát từ mono bào xuyên mạch vào mô và đại thực bào tại chỗ; dưới KHV điện tử bào tương chứa những túi thực bào rất lớn và không đồng nhất."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận tiêu bản",
        q: "Soi tiêu bản mô lách của bệnh nhân tan máu mạn tính thấy các đại thực bào lớn trong lách chứa đầy những thể vùi màu nâu vàng trong bào tương. Các thể vùi này có bản chất là gì?",
        source: "Mô học Trần Công Toại – Mục II.1.c (tr. 35)",
        options: [
          "Sắc tố hemosiderin – sản phẩm giáng hóa từ hemoglobin sau khi tiêu hủy hồng cầu già",
          "Sắc tố melanin do tế bào mào thần kinh di cư vào lách",
          "Hạt keratohyalin từ biểu mô phủ thanh mạc lách",
          "Các tinh thể hydroxyapatite từ tủy xương"
        ],
        answer: 0,
        explain: "Trang 35: Trong lách, đại thực bào tại chỗ là những tế bào lớn có nhiệm vụ tiêu hủy hồng cầu già, vì vậy bào tương chứa đầy những thể vùi chứa sắc tố hemosiderin, sản phẩm giáng hóa từ hemoglobin."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đọc hình 3.3 & 3.2",
        q: "Khi quan sát một mẫu mô sẹo cũ đã ổn định so với một vết thương đang trong giai đoạn tăng sinh hàn gắn tích cực, tỷ lệ hai tế bào nào thay đổi rõ rệt nhất?",
        source: "Mô học Trần Công Toại – Mục II.1.b (tr. 34)",
        options: [
          "Vết thương đang hàn gắn giàu NGUYÊN BÀO SỢI (nhiều LNBH tổng hợp chất nền); sẹo cũ ổn định giàu TẾ BÀO SỢI trưởng thành",
          "Vết thương giàu tương bào; sẹo cũ giàu tế bào bụi phổi",
          "Vết thương giàu tế bào nội mô; sẹo cũ giàu tế bào sụn xơ",
          "Vết thương giàu chu bào; sẹo cũ giàu tế bào đài tiết nhầy"
        ],
        answer: 0,
        explain: "Trang 34: Nguyên bào sợi có nhiều LNBH để tổng hợp – đổi mới sợi và chất căn bản; còn tế bào sợi là nguyên bào sợi trưởng thành là cơ sở cấu tạo của vết sẹo."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng phân biệt",
        q: "Nghiên cứu một tế bào hình sao phát hiện bằng kỹ thuật nhuộm bạc, có thân nằm ở lớp sinh sản biểu bì da nhưng bản chất nguồn gốc lại xuất phát từ mào thần kinh. Tế bào này là:",
        source: "Mô học Trần Công Toại – Mục II.1 & Hình 3.20 (tr. 34, 44)",
        options: [
          "Tế bào sắc tố (tổng hợp melanin)",
          "Tế bào trung mô (biệt hóa đa năng)",
          "Tế bào lưới (tạo sợi collagen týp III)",
          "Chu bào (điều chỉnh mao mạch)"
        ],
        answer: 0,
        explain: "Hình 3.20 (tr. 44): Tế bào sắc tố được phát hiện bằng nhuộm bạc, thân nằm ở lớp sinh sản, bào tương vươn vào lớp gai chứa nhiều thể melanin, nguồn gốc mào thần kinh."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng thực tế",
        q: "Vì sao một loại thuốc ức chế chọn lọc sự co giãn của Chu bào quanh mao mạch có thể làm thay đổi lưu lượng và áp lực qua giường vi tuần hoàn?",
        source: "Mô học Trần Công Toại – Mục II.1.f (tr. 37–38)",
        options: [
          "Vì chu bào nằm ôm sát mao mạch (cách nội mô qua 1 màng đáy) và có tận cùng thần kinh trên bề mặt giữ chức năng điều chỉnh kích thước lòng mao mạch",
          "Vì chu bào trực tiếp bơm huyết thanh từ tĩnh mạch chủ",
          "Vì chu bào tiết histamin phá hủy toàn bộ lớp áo giữa động mạch chủ",
          "Vì chu bào tổng hợp sợi collagen týp IV lấp đầy lòng mao mạch"
        ],
        answer: 0,
        explain: "Trang 38 & Hình 3.20: Trên bề mặt chu bào có tận cùng thần kinh nên chu bào được coi là tế bào có chức năng điều chỉnh kích thước lòng mao mạch."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng kỹ thuật",
        q: "Một mẫu sinh thiết khối mô chưa rõ nguồn gốc từ biểu mô hay mô liên kết. Nếu tiêu bản cho thấy tế bào đứng thưa thớt rời rạc, xen giữa có mạng lưới sợi và nhiều mao mạch cắt ngang bên trong khối tế bào, kết luận chính xác nhất là:",
        source: "Mô học Trần Công Toại – Mục I (tr. 33)",
        options: [
          "Đây là MÔ LIÊN KẾT (vì mô liên kết có tế bào nằm riêng rẽ trong sợi – chất căn bản và là mô duy nhất chứa mạch máu)",
          "Đây chắc chắn là biểu mô trụ giả tầng",
          "Đây chắc chắn là mô sụn trong",
          "Không thể kết luận vì biểu mô cũng luôn chứa rất nhiều mao mạch bên trong"
        ],
        answer: 0,
        explain: "Trang 33: Trong mô liên kết, các tế bào nằm riêng rẽ, giữa chúng có sợi và chất căn bản, và mô liên kết là mô DUY NHẤT chứa mạch máu (trừ sụn vô mạch và biểu mô vô mạch)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nghiên cứu Y sinh",
        q: "Trong y học tái tạo hiện đại, khi phân lập 'tế bào gốc ở người trưởng thành' từ mô liên kết trung tâm dây rốn hoặc mô đệm cơ quan để biệt hóa thành nguyên bào sợi, tạo cốt bào hay tế bào mỡ, quần thể tế bào nào chính là đối tượng thu nhận?",
        source: "Mô học Trần Công Toại – Mục II.1.a (tr. 34)",
        options: [
          "Tế bào trung mô (vốn tồn tại ở người trưởng thành và giữ nguyên khả năng biệt hóa đa năng)",
          "Tế bào sợi đã trưởng thành hoàn toàn ở gân",
          "Tương bào đã biệt hóa cuối để tiết IgG",
          "Hủy cốt bào đa nhân từ tủy xương"
        ],
        answer: 0,
        explain: "Trang 34: Ở người trưởng thành, một số tế bào trung mô vẫn còn tồn tại và giữ nguyên khả năng biệt hóa nên được gọi là tế bào gốc ở người trưởng thành (tế bào đa năng)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Lâm sàng dị ứng",
        q: "Để ngăn ngừa cơn phản vệ do masto bào ở bệnh nhân dị ứng nặng, thuốc ức chế thụ thể histamin hoặc thuốc ổn định màng masto bào nhằm mục tiêu trực tiếp vào bước nào trong cơ chế bệnh sinh?",
        source: "Mô học Trần Công Toại – Mục II.1.e (tr. 37–38)",
        options: [
          "Ngăn phóng thích hoặc đối kháng tác dụng của histamin, protease, ECF-A, heparin từ các hạt ái kiềm của masto bào khi kháng nguyên gắn lên IgE",
          "Kích thích tương bào tổng hợp thêm nhiều IgE gắn lên masto bào",
          "Phá hủy toàn bộ hệ thống đại thực bào phụ trợ miễn dịch",
          "Tăng cường quá trình hóa sừng của lớp gai biểu bì da"
        ],
        answer: 0,
        explain: "Trang 37–38: Ngăn chặn quá trình hoạt hóa giải phóng hạt ái kiềm hoặc chẹn tác dụng giãn mạch, tăng tính thấm và co thắt cơ trơn của histamin từ masto bào."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: SỢI LIÊN KẾT, CHẤT CĂN BẢN & PHÂN LOẠI MÔ LIÊN KẾT CHÍNH THỨC
  // Base (6): L1=1, L2=4, L3=1 | Extra (18): L1=5, L2=5, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  5: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Thông số)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Kỹ thuật nhuộm" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng phân tử" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vị trí mô chun)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Loại collagen phổ biến nhất, chiếm hơn 80% lượng collagen của cơ thể và tạo bó sợi dày ở bì da, xương, gân, dây chằng là:",
        source: "Mô học Trần Công Toại – Mục II.2.a (tr. 39)",
        options: [
          "Collagen týp I",
          "Collagen týp II",
          "Collagen týp III",
          "Collagen týp IV"
        ],
        answer: 0,
        explain: "Trang 39: Collagen týp I là loại phổ biến nhất, chiếm hơn 80% lượng collagen của cơ thể, gặp chủ yếu trong lớp bì da, xương, sụn xơ, cân, dây chằng và gân cơ."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Collagen týp IV chỉ gặp đặc trưng ở cấu trúc giải phẫu mô học nào sau đây?",
        source: "Mô học Trần Công Toại – Mục II.2.a & Hình 3.12 (tr. 40)",
        options: [
          "Trong các màng đáy cầu thận (không tạo vi sợi, chỉ kết hợp hóa học giữa các đầu phân tử)",
          "Trong sụn trong ở khí quản (dạng tấm dạ phớt)",
          "Trong gân và dây chằng vàng cột sống",
          "Trong khung đỡ của hạch bạch huyết và lách"
        ],
        answer: 0,
        explain: "Trang 40: Các phân tử collagen týp IV chỉ gặp trong các màng đáy cầu thận, không tạo được vi sợi mà chỉ kết hợp với nhau bằng các liên kết hóa học giữa các đầu phân tử."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Hai tế bào sản xuất ra sợi chun và hai thành phần cấu tạo nên một sợi chun là:",
        source: "Mô học Trần Công Toại – Mục II.2.b (tr. 40)",
        options: [
          "Do nguyên bào sợi & tế bào cơ trơn sản xuất; cấu tạo bởi phân tử elastin (750 acid amin) và các vi sợi collagen đường kính 10 nm",
          "Do tương bào & masto bào sản xuất; cấu tạo bởi 3 chuỗi alpha và hydroxyapatite",
          "Do tế bào nội mô sản xuất; cấu tạo bởi acid hyaluronic và đường đôi",
          "Do đại thực bào sản xuất; cấu tạo bởi collagen týp IV và fibronectin"
        ],
        answer: 0,
        explain: "Trang 40: Sợi chun được sản xuất bởi các nguyên bào sợi và tế bào cơ trơn, cấu tạo gồm hai thành phần: phân tử elastin (polypeptide 750 acid amin) và các vi sợi collagen đường kính 10 nm."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Bốn loại mô liên kết chính thức được phân chia theo thành phần chiếm ưu thế là:",
        source: "Mô học Trần Công Toại – Mục II.3–4 (tr. 41–42)",
        options: [
          "Mô liên kết nhầy, mô liên kết thưa, mô liên kết đặc và mô chun",
          "Mô lưới, mô mỡ, mô sụn và mô xương",
          "Biểu mô lát, biểu mô vuông, biểu mô trụ và biểu mô niệu",
          "Collagen týp I, týp II, týp III và týp IV"
        ],
        answer: 0,
        explain: "Trang 41–42: Tùy theo thành phần nào (chất căn bản, tế bào, sợi collagen, sợi chun) chiếm ưu thế mà phân thành 4 loại mô liên kết chính thức: mô nhầy, mô liên kết thưa, mô liên kết đặc và mô chun."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Đơn vị cấu tạo lặp lại tạo nên chuỗi glucid của glycosaminoglycan (GAG) trong phân tử proteoglycan là:",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 41)",
        options: [
          "Các phân tử đường đôi (disaccharid)",
          "Chuỗi alpha gồm 1000 acid amin",
          "Polypeptide elastin 750 acid amin",
          "Các muối phốt phát canxi vô định hình"
        ],
        answer: 0,
        explain: "Trang 41: Mỗi glycosaminoglycan là một chuỗi glucid có đơn vị cấu tạo là các phân tử đường đôi, gắn đồng hóa trị lên trục protein tạo proteoglycan."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)",
        q: "Vì sao các phân tử procollagen sau khi được ghép 3 chuỗi ở bộ Golgi lại KHÔNG tự kết hợp ngay thành vi sợi collagen ở bên trong tế bào?",
        source: "Mô học Trần Công Toại – Mục II.2.a (tr. 39)",
        options: [
          "Vì ở hai đầu phân tử procollagen còn gắn hai đoạn peptide ngắn không xoắn ức chế sự kết tụ; chỉ khi xuất bào ra ngoài mới bị cắt bỏ thành tropocollagen",
          "Vì pH trong tế bào quá kiềm làm hòa tan hoàn toàn chuỗi alpha",
          "Vì bộ Golgi giữ procollagen bằng cầu nối disulfur của fibronectin",
          "Vì bên trong tế bào không có muối natri và chondroitin sulfat"
        ],
        answer: 0,
        explain: "Trang 39: Các phân tử procollagen chưa thể kết hợp ngay với nhau bên trong tế bào vì bị ức chế bởi các đoạn peptide ngắn; ra môi trường ngoại bào, procollagen được cắt bỏ các đoạn peptide ngắn biến thành tropocollagen mới kết hợp được."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Siêu cấu trúc)",
        q: "Sụn trong chứa nhiều sợi collagen týp II nhưng khi quan sát dưới kính hiển vi quang học lại thấy chất nền sụn có vẻ trong suốt và đồng nhất là nhờ đặc điểm gì?",
        source: "Mô học Trần Công Toại – Mục II.2.a (tr. 39)",
        options: [
          "Collagen týp II không tạo bó sợi lớn như týp I mà chỉ tạo các vi sợi rất mảnh đan thành cấu trúc giống tấm dạ phớt",
          "Collagen týp II bị hòa tan hoàn toàn trong nước của chất căn bản",
          "Collagen týp II chỉ nằm bên trong ổ sụn chứ không ra ngoài chất nền",
          "Collagen týp II không bắt bất kỳ thuốc nhuộm nào và hoàn toàn vô hình dưới KHV điện tử"
        ],
        answer: 0,
        explain: "Trang 39: Collagen týp II không tạo thành các bó sợi lớn như týp I mà chỉ tạo các vi sợi rất mảnh kết hợp thành cấu trúc giống tấm dạ phớt (0,31 µm) → chất nền sụn trong trông đồng nhất dưới KHV quang học."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hóa lý)",
        q: "Cấu trúc nào giải thích trực tiếp cho tính CĂNG PHỒNG của chất căn bản mô liên kết và khả năng khuếch tán dễ dàng ion – chất chuyển hóa?",
        source: "Mô học Trần Công Toại – Mục II.3 & Hình 3.13 (tr. 40–41)",
        options: [
          "Các tập hợp Proteoglycan khổng lồ (hàng trăm triệu dalton) liên kết với acid hyaluronic qua protein nối cùng hàng trăm chuỗi GAG cứng và rất ưa nước",
          "Mạng sợi collagen týp I không thấm nước bao bọc xung quanh",
          "Các tinh thể hydroxyapatite lấp đầy khoảng gian bào mô liên kết thưa",
          "Sự kết nối chặt của liên kết vòng bịt ngăn nước đi vào mô liên kết"
        ],
        answer: 0,
        explain: "Trang 41: GAG cứng và rất ưa nước nên proteoglycan choán thể tích lớn và giữ lượng nước đáng kể; nhiều proteoglycan gắn lên một acid hyaluronic qua protein nối tạo tập hợp hàng trăm triệu dalton càng làm tăng mạnh tính căng phồng và khuếch tán."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "So sánh cấu trúc sắp xếp sợi của 'Mô liên kết đặc có định hướng' ở Gân – Dây chằng so với ở Cân – Lớp chân bì giác mạc:",
        source: "Mô học Trần Công Toại – Mục II.4.c (tr. 42)",
        options: [
          "Gân và dây chằng: sợi collagen xếp thành BÓ song song; Cân và lớp chân bì giác mạc: xếp thành LỚP song song",
          "Gân: xếp theo mọi hướng; Cân: chỉ chứa sợi elastin",
          "Gân: chứa collagen týp IV; Giác mạc: chứa collagen týp III",
          "Cả hai đều có chất căn bản chiếm ưu thế tuyệt đối"
        ],
        answer: 0,
        explain: "Trang 42: Mô liên kết đặc có định hướng có các sợi collagen được xếp thành các bó song song như trong gân và dây chằng, hoặc thành các lớp song song như trong cân và lớp chân bì của giác mạc."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Trong 4 loại mô liên kết chính thức, loại nào thường gặp NHẤT trong cơ thể (ở vỏ bao nhiều cơ quan, lớp bì da) và loại nào nhiều ở phôi thai nhưng hiếm gặp ở người lớn?",
        source: "Mô học Trần Công Toại – Mục II.4 (tr. 42)",
        options: [
          "Thường gặp nhất: Mô liên kết đặc không định hướng; Nhiều ở phôi thai & hiếm ở người lớn: Mô liên kết nhầy",
          "Thường gặp nhất: Mô chun; Hiếm ở người lớn: Mô liên kết thưa",
          "Thường gặp nhất: Mô liên kết nhầy; Hiếm ở người lớn: Mô liên kết đặc",
          "Thường gặp nhất: Mô lưới; Hiếm ở người lớn: Mô mỡ trắng"
        ],
        answer: 0,
        explain: "Trang 42: Mô liên kết đặc không định hướng là loại thường gặp nhất; còn mô liên kết nhầy (trung mô) có nhiều ở phôi thai và hiếm gặp ở người lớn (chỉ xung quanh một số tuyến và mạch máu)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng siêu cấu trúc",
        q: "Đo trên ảnh kính hiển vi điện tử một vi sợi có chu kỳ lặp lại của băng tối và băng sáng đúng 64 nm (với khoảng hở 30 nm). Tuy nhiên trên ảnh khác của màng đáy cầu thận (Hình 3.12) hoàn toàn không thấy cấu trúc vân 64 nm này dù vẫn là collagen. Lý do là:",
        source: "Mô học Trần Công Toại – Mục II.2.a & Hình 3.10, 3.12 (tr. 38–40)",
        options: [
          "Màng đáy cầu thận là collagen týp IV, không lắp ráp thành vi sợi xếp lệch 64 nm mà chỉ nối hóa học giữa các đầu phân tử",
          "Màng đáy cầu thận chỉ chứa sợi chun elastin 750 acid amin",
          "Thuốc nhuộm H&E đã làm mất băng tối trên ảnh hiển vi điện tử",
          "Màng đáy cầu thận là collagen týp I chưa cắt đoạn peptide procollagen"
        ],
        answer: 0,
        explain: "Trang 38 & 40: Vân chu kỳ 64 nm xuất hiện do các tropocollagen xếp lệch nhau thành vi sợi (như týp I); riêng collagen týp IV ở màng đáy cầu thận không tạo được vi sợi mà chỉ nối với nhau bằng liên kết hóa học giữa các đầu phân tử."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng bệnh học phân tử",
        q: "Một đột biến gen làm thiếu hụt enzym ngoại bào cắt hai đoạn peptide ngắn ở hai đầu phân tử procollagen (procollagen peptidase). Hậu quả mô học trực tiếp xảy ra tại khoảng gian bào là:",
        source: "Mô học Trần Công Toại – Mục II.2.a & Hình 3.11 (tr. 39)",
        options: [
          "Procollagen không chuyển thành tropocollagen nên không lắp ráp được thành các vi sợi collagen trưởng thành bền vững",
          "Chuỗi tiền alpha không tổng hợp được trong lưới nội bào hạt",
          "Sợi elastin mất hoàn toàn cầu nối disulfur của fibronectin",
          "Tế bào sụn không tạo được chondroitin sulfat"
        ],
        answer: 0,
        explain: "Trang 39: Procollagen bị ức chế kết tụ bởi 2 đoạn peptide ngắn; khi ra ngoại bào phải cắt bỏ 2 đoạn này để biến thành tropocollagen mới kết hợp thành vi sợi collagen được."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng kỹ thuật nhuộm",
        q: "Bác sĩ giải phẫu bệnh muốn kiểm tra đồng thời hệ sợi khung nâng đỡ trong sinh thiết hạch bạch huyết VÀ kiểm tra lớp sợi đàn hồi của thành động mạch chủ bị phình tách. Hai kỹ thuật nhuộm đặc biệt cần chỉ định lần lượt là:",
        source: "Mô học Trần Công Toại – Mục II.2 (tr. 39–40)",
        options: [
          "Hạch bạch huyết (sợi lưới collagen III): Ngấm bạc (màu đen); Động mạch chủ (sợi chun): Aldehyde fuchsin (màu tím)",
          "Hạch bạch huyết: P.A.S (màu đỏ); Động mạch chủ: H&E thông thường",
          "Hạch bạch huyết: Aldehyde fuchsin; Động mạch chủ: Ngấm bạc",
          "Cả hai mẫu đều chỉ cần nhuộm hematoxylin không cần nhuộm đặc biệt"
        ],
        answer: 0,
        explain: "Trang 39–40: Sợi collagen týp III (sợi lưới ở cơ quan tạo huyết) dùng kỹ thuật ngấm bạc bắt màu đen; sợi chun ở động mạch lớn dùng phương pháp aldehyde fuchsin bắt màu tím."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng phân tử",
        q: "Nếu dùng hóa chất khử đứt các cầu nối disulfur (<code>-S-S-</code>) ở vùng ngoại bào mô liên kết (Hình 3.13), phân tử cầu nối nào bị tách đôi làm mất liên kết cơ học giữa khung actin trong tế bào với proteoglycan & vi sợi collagen bên ngoài?",
        source: "Mô học Trần Công Toại – Mục II.3 & Hình 3.13 (tr. 41)",
        options: [
          "Fibronectin",
          "Acid hyaluronic",
          "Tropocollagen týp II",
          "Elastin"
        ],
        answer: 0,
        explain: "Trang 41: Fibronectin gồm hai phân tử protein gắn với nhau bằng cầu nối disulfur (-S-S-), một đầu nối proteoglycan & vi sợi collagen, đầu kia móc vào siêu sợi actin nội bào qua protein xuyên màng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận tiêu bản",
        q: "Soi 3 mẫu mô liên kết chính thức chưa dán nhãn: Mẫu 1 toàn các tế bào rải rác trong khoảng nền sáng rộng mênh mông; Mẫu 2 dày đặc các bó sợi chạy đan chéo mọi hướng rất ít tế bào; Mẫu 3 rất nhiều loại tế bào nằm chen sát nhau ít chất căn bản. Thứ tự 1–2–3 tương ứng là:",
        source: "Mô học Trần Công Toại – Mục II.4 & Hình 3.14–3.16 (tr. 42)",
        options: [
          "1: Mô liên kết nhầy; 2: Mô liên kết đặc không định hướng; 3: Mô liên kết thưa",
          "1: Mô liên kết đặc; 2: Mô chun; 3: Mô liên kết nhầy",
          "1: Mô liên kết thưa; 2: Mô liên kết nhầy; 3: Mô lưới",
          "1: Mô chun; 2: Mô mỡ; 3: Mô liên kết đặc có định hướng"
        ],
        answer: 0,
        explain: "Trang 42: Chất căn bản ưu thế = MLK nhầy; Sợi collagen bó lớn chạy mọi hướng ít TB & ít chất căn bản = MLK đặc không định hướng; Thành phần tế bào ưu thế, ít chất căn bản = MLK thưa."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ sinh lý – bệnh lý",
        q: "Trong phù mô kẽ do ứ trệ tuần hoàn hoặc phản ứng viêm làm biến đổi cấu trúc tập hợp proteoglycan – acid hyaluronic, vai trò sinh lý bình thường nào của chất căn bản bị rối loạn rõ rệt nhất?",
        source: "Mô học Trần Công Toại – Mục II.3 (tr. 40–41)",
        options: [
          "Điều hòa lượng nước giữ trong chất nền ưa nước và trao đổi chất – khuếch tán ion giữa tế bào liên kết với tuần hoàn máu",
          "Co giãn chủ động như sợi cơ vân tạo vận động cơ học",
          "Dẫn truyền xung thần kinh qua khớp nối điện học",
          "Quá trình tạo sừng ở biểu bì lòng bàn chân"
        ],
        answer: 0,
        explain: "Trang 40–41: Chất căn bản là gel ưa nước đảm bảo tính căng phồng và là nơi diễn ra sự khuếch tán – trao đổi chất giữa tế bào liên kết với tuần hoàn máu."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng lâm sàng",
        q: "Thiếu vitamin C (bệnh Scocbut) làm rối loạn phản ứng biến đổi hóa học các chuỗi tiền alpha tổng hợp collagen của nguyên bào sợi và tạo cốt bào. Ngoài tổn thương xương, mô liên kết nào dưới đây cũng bị ảnh hưởng sức bền cơ học nghiêm trọng?",
        source: "Mô học Trần Công Toại – Mục II.2.a & IV.6 (tr. 39, 62)",
        options: [
          "Bì da, gân, dây chằng, chân răng (các cấu trúc giàu collagen týp I và mạch máu mô liên kết dễ xuất huyết)",
          "Sụn chun vành tai (chỉ chứa sợi chun không có collagen týp I)",
          "Sợi elastin tinh khiết không cần vitamin C",
          "Lớp bóng của biểu bì da chứa eleidin"
        ],
        answer: 0,
        explain: "Collagen týp I chiếm >80% collagen cơ thể (bì da, xương, gân, dây chằng, cân); khi thiếu vitamin C (Scocbut, tr. 62) giảm tổng hợp collagen/chất căn bản gây chảy máu chân răng, da tái, xương dễ gãy."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ giải phẫu – sinh lý",
        q: "Ở người cao tuổi, các sợi chun trong thành động mạch chủ và phổi bị thoái hóa giảm khả năng co lại sau khi kéo giãn. Biến đổi mô học ở cấp độ mô liên kết chính thức này dẫn đến hậu quả trực tiếp nào?",
        source: "Mô học Trần Công Toại – Mục II.2.b & II.4.d (tr. 40, 42)",
        options: [
          "Giảm tính đàn hồi của mô chun tại các cơ quan phải thay đổi thể tích lớn (động mạch chủ, động mạch phổi, phổi)",
          "Tăng cường sinh sản đắp thêm ở sụn xơ dây chằng vàng",
          "Chuyển mô chun thành mô liên kết nhầy như phôi thai",
          "Làm tắc hoàn toàn các lỗ connexon trong dây chằng"
        ],
        answer: 0,
        explain: "Trang 40 & 42: Sợi chun ưu thế trong mô chun gặp ở phổi, động mạch chủ, động mạch phổi, dây thanh âm và dây chằng vàng — chuyên chịu những thay đổi lớn về thể tích và co lại khi kéo giãn."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: MÔ LIÊN KẾT CHUYÊN BIỆT: MÔ LƯỚI & MÔ MỠ
  // Base (6): L1=2, L2=3, L3=1 | Extra (18): L1=4, L2=6, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  6: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Kỹ thuật nhuộm" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Màu sắc)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tuần hoàn)" },
      { level: 3, ksa: "S", ksaLabel: "S3: Đọc tiêu bản mô mỡ" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Sợi lưới trong mô lưới thực chất là loại sợi collagen týp nào?",
        source: "Mô học Trần Công Toại – Mục III (tr. 43)",
        options: [
          "Sợi collagen týp III",
          "Sợi collagen týp I",
          "Sợi collagen týp II",
          "Sợi collagen týp IV"
        ],
        answer: 0,
        explain: "Trang 43: Định nghĩa mô lưới chỉ có hai thành phần là các tế bào lưới và sợi lưới (sợi collagen týp III), không có chất căn bản."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Mô lưới tạo thành khung đỡ đặc trưng trong ba cơ quan tạo huyết nào?",
        source: "Mô học Trần Công Toại – Mục III (tr. 43)",
        options: [
          "Hạch bạch huyết, lách và tủy xương",
          "Tuyến tụy, tuyến nước bọt và tuyến bã",
          "Vành tai, nắp thanh quản và khí quản",
          "Thực quản, dạ dày và bàng quang"
        ],
        answer: 0,
        explain: "Trang 43: Mô lưới tạo thành khung đỡ trong các cơ quan tạo huyết như hạch bạch huyết, lách và tủy xương."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Quan sát bằng mắt thường (đại thể), mô mỡ có đặc điểm ngoại hình gì?",
        source: "Mô học Trần Công Toại – Mục IV.1 (tr. 43)",
        options: [
          "Có vẻ đồng nhất và óng ánh",
          "Cứng chắc và chia vân sáng tối như xương",
          "Trong suốt láng mịn màu xanh trắng như sụn khớp",
          "Xốp màu đen tuyền khi chưa nhuộm"
        ],
        answer: 0,
        explain: "Trang 43 (Mục IV.1 Đại thể): Nhìn bằng mắt thường, mô mỡ có vẻ đồng nhất và óng ánh."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Bốn chức năng chính của mô mỡ trong cơ thể được nêu trong giáo trình là:",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43–44)",
        options: [
          "Dự trữ năng lượng, cách nhiệt chống lạnh, tạo hình cho cơ thể và bảo vệ chống tác động cơ học",
          "Tạo huyết, tạo xương, thu nhận cảm giác đau và tiết HCl",
          "Sản xuất globulin miễn dịch, tổng hợp keratin và hấp thu thức ăn",
          "Vận chuyển bụi hô hấp, giải phóng histamin và tạo cầu sụn"
        ],
        answer: 0,
        explain: "Trang 43–44: Mô mỡ là nơi dự trữ năng lượng (giữa các bữa ăn), cách nhiệt chống lạnh, tạo hình cho cơ thể và bảo vệ cơ thể chống tác động cơ học."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo)",
        q: "So sánh thành phần của Mô lưới với Mô liên kết chính thức và Mô sụn:",
        source: "Mô học Trần Công Toại – Mục I, III (tr. 33, 42–43, 46)",
        options: [
          "Mô liên kết chính thức và mô sụn đều có đủ 3 thành phần (tế bào, sợi, chất căn bản); riêng Mô lưới CHỈ có 2 thành phần (tế bào lưới + sợi lưới) và KHÔNG có chất căn bản",
          "Mô lưới có chất căn bản giàu chondroitin sulfat nhất",
          "Mô sụn chỉ có 2 thành phần còn mô lưới có đủ 3 thành phần",
          "Cả mô lưới và mô mỡ đều hoàn toàn không có sợi liên kết"
        ],
        answer: 0,
        explain: "Trang 42–43: Mô lưới chỉ có 2 thành phần là tế bào lưới và sợi lưới (collagen týp III), KHÔNG có chất căn bản — khác với mô liên kết chính thức và mô sụn đều có 3 thành phần."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hình thái)",
        q: "Hình thái của tế bào lưới khi quan sát bằng kỹ thuật nhuộm thông thường (H&E) có đặc điểm gì?",
        source: "Mô học Trần Công Toại – Mục III (tr. 43)",
        options: [
          "Là tế bào hình sao có nhiều nhánh bào tương đan nối với nhau thành mạng lưới thứ hai móc chồng lên mạng lưới sợi lưới",
          "Là tế bào khổng lồ đa nhân nằm ép lên vách xương",
          "Là tế bào hình khối vuông xếp thành lá tuyến không nhánh",
          "Là tế bào chứa 1 giọt lipid khổng lồ đẩy nhân lệch bên"
        ],
        answer: 0,
        explain: "Trang 43: Bằng kỹ thuật nhuộm thông thường sẽ thấy rõ tế bào lưới là tế bào hình sao có nhiều nhánh bào tương đan nối nhau thành mạng lưới thứ hai móc chồng lên mạng thứ nhất (sợi lưới)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Sự khác nhau về hình thái giọt mỡ nội bào giữa mô mỡ trắng và mô mỡ nâu là gì?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43–44)",
        options: [
          "Mỡ trắng chứa MỘT giọt lipid lớn duy nhất ép dẹt nhân; Mỡ nâu chứa NHIỀU giọt mỡ nhỏ rải rác trong bào tương",
          "Mỡ trắng chứa nhiều giọt nhỏ; Mỡ nâu chứa 1 giọt lớn không có ty thể",
          "Mỡ trắng không có màng tế bào; Mỡ nâu có lớp sừng hóa",
          "Cả hai đều có cấu tạo giống hệt nhau, chỉ khác vị trí ở trẻ em và người già"
        ],
        answer: 0,
        explain: "Trang 43–44: Mỡ trắng cấu tạo bởi các tế bào mỡ chứa một giọt lipid lớn; mỡ nâu cấu tạo bởi các tế bào chứa nhiều giọt mỡ nhỏ trong bào tương."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Quá trình tích mỡ)",
        q: "Trong quá trình hình thành tế bào mỡ trắng, khi lượng lipid tăng dần từ ít lên nhiều sẽ diễn ra hiện tượng gì?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43)",
        options: [
          "Ban đầu phân tán thành nhiều giọt nhỏ trong bào tương, sau đó các giọt nhỏ hòa nhập thành một giọt lớn duy nhất đẩy nhân bị ép dẹt ra sát màng tế bào",
          "Lipid tiết dần ra ngoài theo kiểu bán hủy vào mao mạch tiểu thùy",
          "Nhân tế bào phân chia thành nhiều nhân giống hủy cốt bào",
          "Giọt lipid kết tinh thành muối hydroxyapatite"
        ],
        answer: 0,
        explain: "Trang 43: Khi lượng lipid còn ít, các giọt mỡ phân tán đều dưới dạng giọt nhỏ; khi tăng lên, các giọt nhỏ hòa nhập thành một giọt lớn duy nhất choáng hết bào tương làm nhân bị ép dẹt sát màng tế bào."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân bố theo tuổi)",
        q: "Mô mỡ nâu hiện diện nhiều nhất ở đối tượng nào và giữ chức năng sinh lý nổi bật nào?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 44)",
        options: [
          "Có nhiều ở trẻ sơ sinh (giúp sinh nhiệt chống lạnh nhờ ty thể và mao mạch phong phú)",
          "Chỉ xuất hiện ở người già trên 70 tuổi do thoái hóa sụn",
          "Chỉ xuất hiện ở bào thai 2 tuần trước khi hình thành trung bì",
          "Chỉ có trong tủy xám của thân xương dài"
        ],
        answer: 0,
        explain: "Trang 44: Mô mỡ nâu có nhiều ở trẻ sơ sinh, bào tương chứa nhiều giọt mỡ nhỏ và rất nhiều ty thể kèm mao mạch phong phú."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Phân tích cấu trúc tiểu thùy",
        q: "Mỗi tiểu thùy mô mỡ được cấu tạo tổ chức bởi hai thành phần nâng đỡ và cấp máu nào?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43)",
        options: [
          "Phân cách nhau bởi các vách mỏng mô liên kết đặc; mỗi tiểu thùy nhận 1 tiểu động mạch phân nhánh lưới mao mạch bên trong",
          "Phân cách bởi màng sụn 2 lớp; hoàn toàn không có tiểu động mạch",
          "Phân cách bởi vách biểu mô lát đơn; nuôi dưỡng bằng thẩm thấu qua dịch khớp",
          "Phân cách bởi xương Havers đặc; cấp máu qua ống Havers"
        ],
        answer: 0,
        explain: "Trang 43: Tế bào mỡ liên kết thành tiểu thùy phân cách bởi vách mỏng mô liên kết đặc; mỗi tiểu thùy có 1 tiểu động mạch chia lưới mao mạch bên trong nên mô mỡ rất giàu mạch máu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng nhuộm tiêu bản",
        q: "Sinh thiết hạch bạch huyết được chia làm 2 lát cắt: Lát 1 nhuộm H&E thường, Lát 2 nhuộm ngấm bạc. Khi so sánh hai lát cắt, nhận định nào sau đây ĐÚNG?",
        source: "Mô học Trần Công Toại – Mục III & Hình 3.18 (tr. 43)",
        options: [
          "Lát 2 (ngấm bạc) thấy rõ mạng lưới sợi lưới màu đen nhưng khó thấy tế bào lưới; Lát 1 (H&E) thấy rõ tế bào lưới hình sao nhiều nhánh nhưng không thấy rõ sợi lưới",
          "Lát 1 (H&E) thấy sợi lưới màu đen; Lát 2 (ngấm bạc) thấy rõ chất căn bản ưa nước",
          "Cả hai lát đều thấy sợi lưới bắt màu đỏ P.A.S và tế bào lưới đa nhân",
          "Lát 2 hòa tan mất hoàn toàn các tế bào hồng cầu và bạch cầu trong mắt lưới"
        ],
        answer: 0,
        explain: "Trang 43: Kỹ thuật ngấm bạc làm sợi lưới (collagen III) bắt màu đen nhưng khó thấy tế bào lưới bám vào nó; kỹ thuật nhuộm thường không thấy rõ sợi lưới (tr. 39) nhưng thấy rõ tế bào lưới hình sao."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Chẩn đoán vi thể",
        q: "Soi một tiêu bản mô liên kết thấy nhiều hốc lớn hình tròn/đa diện trống rỗng dính sát nhau tạo hình ảnh 'lưới tổ ong', rìa mỗi hốc có 1 nhân dẹt sát màng, chen giữa từng cụm là vách sợi collagen mảnh có mạch máu. Để chứng minh loại sợi bọc sát từng tế bào riêng lẻ trong đám này, cần nhuộm gì và thấy sợi gì?",
        source: "Mô học Trần Công Toại – Mục IV.2 & Hình 3.19 (tr. 43)",
        options: [
          "Kỹ thuật ngấm bạc – thấy mạng lưới sợi collagen týp III (sợi lưới) bao quanh từng tế bào mỡ",
          "Kỹ thuật aldehyde fuchsin – thấy sợi collagen týp II dạng tấm dạ phớt",
          "Kỹ thuật P.A.S – thấy bó sợi collagen týp I",
          "Nhuộm H&E – thấy sợi keratin xuyên màng tế bào"
        ],
        answer: 0,
        explain: "Trang 43: Mỗi tế bào mỡ được bao quanh bởi một mạng lưới sợi collagen týp III (sợi lưới); muốn thấy rõ collagen týp III phải dùng kỹ thuật ngấm bạc (tr. 39)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng phân biệt",
        q: "Làm thế nào phân biệt trên lát cắt nhuộm H&E giữa 'Tế bào nang tiết nhầy' (ở tuyến nước bọt) và 'Tế bào mỡ trắng' (ở mô mỡ) khi cả hai đều trông sáng và có nhân ép dẹt sát rìa?",
        source: "Mô học Trần Công Toại – Bài 3 & Bài 6 (tr. 28–29, 43–44)",
        options: [
          "Tế bào tiết nhầy xếp hình tháp quanh lòng ống tuyến và dương tính ĐỎ khi nhuộm P.A.S; Tế bào mỡ tròn/đa diện xếp thành tiểu thùy không có lòng ống và P.A.S âm tính (hòa tan lipid)",
          "Tế bào tiết nhầy có nhiều giọt nhỏ và ty thể nâu; Tế bào mỡ xếp thành liềm Gianuzzi",
          "Tế bào tiết nhầy luôn có lông chuyển ở cực đỉnh; Tế bào mỡ nằm trên màng đáy biểu mô",
          "Không thể phân biệt được bằng nhuộm P.A.S hay cấu trúc ống tuyến"
        ],
        answer: 0,
        explain: "Nang nhầy là biểu mô tuyến có lòng ống và chứa glucid nên bắt màu đỏ khi nhuộm P.A.S; mô mỡ không có lòng ống tuyến, chia tiểu thùy giàu mao mạch, lipid bị dung môi rửa trôi để lại khoảng trống."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng sinh học",
        q: "Một bệnh nhân cao tuổi nằm lâu bị suy kiệt nặng (gầy mòn), mẫu sinh thiết tủy xương cho thấy thay thế phần lớn tủy mỡ màu vàng bằng một loại tủy màu xám gồm tế bào sợi và sợi collagen. Hiện tượng chuyển dạng từ loại mô nào sang loại mô nào đã xảy ra?",
        source: "Mô học Trần Công Toại – Mục IV (tr. 43) & Tủy xương (tr. 57)",
        options: [
          "Từ tủy mỡ vàng (mô mỡ dự trữ) chuyển sang tủy xơ màu xám (tế bào sợi và sợi collagen)",
          "Từ tủy tạo huyết sang sụn chun không vôi hóa",
          "Từ mô mỡ nâu sang biểu mô lát tầng sừng hóa",
          "Từ mô lưới sang tuyến nội tiết vỏ thượng thận"
        ],
        answer: 0,
        explain: "Kết hợp Bài 6 (tr. 43) & Bài 8 (tr. 57): 4 loại tủy thay đổi theo tuổi/trạng thái gồm tủy tạo cốt, tủy tạo huyết, tủy mỡ màu vàng và tủy xơ màu xám (tế bào sợi + collagen)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng mô bệnh học",
        q: "Trong mẫu sinh thiết u mỡ lành tính vùng gáy trẻ sơ sinh (hibernoma), tế bào u có nhân nằm tương đối trung tâm và bào tương chứa đầy các không bào mỡ nhỏ li ti không hợp nhất thành một giọt lớn, kèm rất nhiều mao mạch và ty thể. Mô bình thường tương ứng của loại tế bào này là:",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 44)",
        options: [
          "Mô mỡ nâu",
          "Mô mỡ trắng trưởng thành",
          "Mô lưới tủy xương",
          "Mô liên kết nhầy"
        ],
        answer: 0,
        explain: "Trang 44: Mô mỡ nâu có tế bào chứa nhiều giọt mỡ nhỏ trong bào tương, giàu mao mạch và nhiều ty thể tạo màu nâu, gặp nhiều ở trẻ sơ sinh."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Kỹ thuật làm tiêu bản",
        q: "Để giữ nguyên vẹn các giọt lipid trong mô mỡ và nhuộm màu trực tiếp các giọt mỡ này mà không bị cồn và xylen hòa tan mất trên tiêu bản paraffin, kỹ thuật xử lý mô nào (đã học ở Mở đầu) phù hợp nhất?",
        source: "Mô học Trần Công Toại – Mở đầu (tr. 9) & Mô mỡ (tr. 43)",
        options: [
          "Phương pháp làm lạnh nhanh mẫu mô (cắt lạnh bằng máy cắt lạnh), tránh khử nước cồn và làm trong xylen",
          "Ngâm đúc khối trong parafin nóng chảy ở 60°C và rửa kỹ bằng toluen",
          "Nhuộm ngấm bạc với muối nitrat bạc",
          "Dùng acid mạnh khử khoáng mẫu mô mỡ"
        ],
        answer: 0,
        explain: "Trang 9 (Mở đầu): Xử lý paraffin dùng cồn khử nước và xylen/toluen làm trong sẽ hòa tan hết lipid; phương pháp làm lạnh nhanh và cắt lát trên máy cắt lạnh giữ lại được thành phần hóa học (lipid, enzym) gần với thực tế."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ sinh lý",
        q: "Vì sao khi nhịn đói nhiều ngày giữa các bữa ăn hoặc tập luyện kéo dài, cơ thể huy động acid béo từ mô mỡ vào máu cực kỳ nhanh chóng?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 43–44)",
        options: [
          "Nhờ mô mỡ rất giàu mạch máu (mỗi tiểu thùy có 1 tiểu động mạch chia lưới mao mạch bao quanh từng tế bào mỡ) giúp giải phóng năng lượng tức thời vào tuần hoàn",
          "Nhờ mô mỡ có ống bài xuất ngoại tiết đổ thẳng vào tá tràng",
          "Nhờ các tế bào mỡ tự biến thành hồng cầu đi vào máu",
          "Nhờ mô mỡ không có màng đáy nên mọi tế bào mỡ tự bơi vào tĩnh mạch"
        ],
        answer: 0,
        explain: "Trang 43–44: Mô mỡ dự trữ lipid từ bữa ăn và giải phóng khi có nhu cầu năng lượng nhờ mạng lưới mao mạch cực kỳ phong phú trong từng tiểu thùy mỡ."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: So sánh chức năng",
        q: "Tại sao ở trẻ sơ sinh dễ bị hạ thân nhiệt hơn người lớn nhưng lại được bù trừ một phần nhờ mô mỡ nâu phát triển mạnh vùng lưng – cổ – quanh thận?",
        source: "Mô học Trần Công Toại – Mục IV.2 (tr. 44)",
        options: [
          "Vì tế bào mỡ nâu có rất nhiều ty thể và mao mạch phong phú giúp oxy hóa nhiều giọt mỡ nhỏ sinh nhiệt trực tiếp chống lạnh",
          "Vì mô mỡ nâu hóa sừng thành lớp dày như da lòng bàn chân",
          "Vì mô mỡ nâu chuyển hóa trực tiếp thành tủy xơ màu xám",
          "Vì trẻ sơ sinh không có mô mỡ trắng dưới da"
        ],
        answer: 0,
        explain: "Trang 44: Mô mỡ nâu có nhiều ở trẻ sơ sinh, chứa nhiều giọt mỡ nhỏ và rất nhiều ty thể cùng mao mạch phong phú để sinh nhiệt; đồng thời mô mỡ giữ vai trò cách nhiệt chống lạnh."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: MÔ SỤN (SỤN TRONG, SỤN CHUN, SỤN XƠ, MÀNG SỤN & SINH SẢN)
  // Base (6): L1=1, L2=3, L3=2 | Extra (18): L1=5, L2=6, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  7: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phủ định)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Miễn dịch)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 3, ksa: "S", ksaLabel: "S3: Phân biệt kiểu sinh sản" },
      { level: 3, ksa: "S", ksaLabel: "S3: Vận dụng màng sụn" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Trong mô sụn tươi, tỷ lệ nước, chất hữu cơ, chất khoáng và tỷ lệ tế bào chiếm bao nhiêu?",
        source: "Mô học Trần Công Toại – Mục I (tr. 46)",
        options: [
          "Tế bào ≤ 10% trọng lượng; sụn tươi gồm 70–80% nước, 10–15% chất hữu cơ và 4–7% chất khoáng (sụn khô 50–70% collagen)",
          "Tế bào chiếm 70% trọng lượng; sụn tươi gồm 30% hữu cơ và 70% vô cơ",
          "Tế bào chiếm 50%; sụn tươi hoàn toàn không có nước và không có chất khoáng",
          "Sụn khô chứa 95% hydroxyapatite tinh thể"
        ],
        answer: 0,
        explain: "Trang 46: Tế bào sụn chiếm không quá 10% trọng lượng. Mô sụn tươi chứa 70–80% nước, 10–15% chất hữu cơ và 4–7% chất khoáng; mô sụn khô có lượng collagen chiếm 50–70%."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Thành phần hóa học nào chiếm 40% trọng lượng khô của mô sụn và quyết định tính rắn, đàn hồi và ưa baz của chất căn bản sụn?",
        source: "Mô học Trần Công Toại – Mục III (tr. 47)",
        options: [
          "Chondroitin sulfat",
          "Hydroxyapatite",
          "Keratohyalin",
          "Fibronectin"
        ],
        answer: 0,
        explain: "Trang 47: Chondroitin sulfat (chiếm 40% trọng lượng khô của mô sụn) quyết định tính rắn, đàn hồi và ưa baz của mô sụn."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Vùng chất căn bản sụn nhuộm màu baz đậm hơn bao quanh ngay sát ổ sụn gọi là gì?",
        source: "Mô học Trần Công Toại – Mục III & Hình 4.2 (tr. 47)",
        options: [
          "Cầu sụn",
          "Đường xi măng",
          "Viền tiền cốt",
          "Liềm Gianuzzi"
        ],
        answer: 0,
        explain: "Trang 47 & Hình 4.2: Xung quanh ổ sụn có vùng chất căn bản nhuộm màu đậm hơn gọi là cầu sụn."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Cấu tạo hai lớp của Màng sụn gồm:",
        source: "Mô học Trần Công Toại – Mục V & Hình 4.3 (tr. 48)",
        options: [
          "Lớp ngoài chứa nhiều sợi collagen; Lớp trong chứa nhiều tế bào sợi non (hoặc TB trung mô) biệt hóa thành nguyên bào sụn",
          "Lớp ngoài là biểu mô lát đơn; Lớp trong là lớp hạt keratohyalin",
          "Lớp ngoài chứa hủy cốt bào; Lớp trong là ống Havers",
          "Lớp ngoài là mô mỡ nâu; Lớp trong chứa sợi lưới ngấm bạc"
        ],
        answer: 0,
        explain: "Trang 48 (Mục V): Màng sụn là mô liên kết chính thức gồm 2 lớp: lớp ngoài chứa nhiều sợi collagen, lớp trong chứa nhiều tế bào sợi non (hoặc tế bào trung mô) biệt hóa thành nguyên bào sụn."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nên phân bố chuẩn xác của 3 loại sụn ở người trưởng thành trong sách Trần Công Toại:",
        source: "Mô học Trần Công Toại – Mục IV (tr. 48)",
        options: [
          "Sụn trong: sụn khớp, sụn đường hô hấp, sụn sườn; Sụn chun: vành tai, nắp thanh quản; Sụn xơ: một số dây chằng (đĩa đệm)",
          "Sụn trong: vành tai; Sụn chun: sụn khớp; Sụn xơ: khí quản",
          "Sụn trong: dây chằng vàng; Sụn chun: sụn sườn; Sụn xơ: thanh quản",
          "Cả ba loại đều chỉ tồn tại trong thời kỳ phôi thai rồi biến mất hoàn toàn"
        ],
        answer: 0,
        explain: "Trang 48: Sụn trong gặp ở sụn khớp, sụn đường hô hấp, sụn sườn; Sụn chun gặp ở vành tai và nắp thanh quản; Sụn xơ gặp trong một số dây chằng."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo & So sánh)",
        q: "Điểm giống nhau và khác nhau giữa Sụn xơ và Mô liên kết đặc là gì?",
        source: "Mô học Trần Công Toại – Mục IV (tr. 48) & Câu 1E (tr. 50)",
        options: [
          "Cả hai đều chứa bó sợi collagen týp I lớn xếp song song thấy rõ dưới KHV quang học; chỉ khác nhau ở thành phần tế bào (tế bào sụn trong ổ sụn vs nguyên bào sợi/tế bào sợi)",
          "Sụn xơ có nhiều mạch máu hơn mô liên kết đặc",
          "Sụn xơ chứa collagen týp III ngấm bạc đen, còn mô liên kết đặc chứa collagen týp II",
          "Sụn xơ có màng sụn 2 lớp còn mô liên kết đặc không có"
        ],
        answer: 0,
        explain: "Trang 48: Sụn xơ có sợi collagen týp I tạo thành bó lớn xếp song song như mô liên kết đặc, nên sụn xơ chỉ khác mô liên kết đặc ở thành phần tế bào (và không có màng sụn)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dinh dưỡng)",
        q: "Vì sao sụn ở diện khớp (sụn khớp) KHÔNG có màng sụn bao bọc nhưng vẫn được nuôi dưỡng bình thường?",
        source: "Mô học Trần Công Toại – Mục VI.2 (tr. 49)",
        options: [
          "Được nuôi dưỡng nhờ sự khuếch tán từ dịch khớp ở phía trên và từ mô xương Havers xốp ở phía dưới sụn",
          "Nhờ hệ thống mao mạch đâm xuyên trực tiếp vào mọi ổ sụn",
          "Nhờ tế bào sụn khớp tự tổng hợp năng lượng không cần dinh dưỡng",
          "Nhờ các vi quản xương chứa glycoprotein xuyên vào đĩa đệm"
        ],
        answer: 0,
        explain: "Trang 49: Ở sụn khớp không có màng sụn nên mô sụn được nuôi dưỡng bởi dịch khớp và từ mô xương Havers xốp phía dưới sụn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)",
        q: "So với sụn trong, thành phần hóa học và khả năng vôi hóa của sụn chun có gì khác biệt?",
        source: "Mô học Trần Công Toại – Mục IV (tr. 48)",
        options: [
          "Lipid, glycogen và chondroitin sulfat ở sụn chun ít hơn sụn trong, và sụn chun KHÔNG BAO GIỜ có hiện tượng vôi hóa",
          "Sụn chun giàu chondroitin sulfat gấp đôi sụn trong và vôi hóa rất sớm",
          "Sụn chun có rất nhiều mạch máu bên trong chất nền",
          "Sụn chun chứa sợi collagen týp I kết bó lớn nên dễ cốt hóa thành xương dài"
        ],
        answer: 0,
        explain: "Trang 48: Lipid, glycogen, chondroitin sulfat ở sụn chun ít hơn ở sụn trong; sụn chun không bao giờ có hiện tượng vôi hóa."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Lão hóa)",
        q: "Những biến đổi mô học nào xảy ra ở mô sụn khi cơ thể về già?",
        source: "Mô học Trần Công Toại – Mục VI.2 (tr. 49–50)",
        options: [
          "Giảm proteoglycan nên giảm tính ưa nước; bào quan & hoạt tính men giảm nhưng glycogen TĂNG; ổ sụn chết bị collagen xâm nhập và ngấm canxi nên sụn đục, cứng nhưng giòn hơn",
          "Tăng mạnh proteoglycan nên sụn mềm dẻo hơn thời trẻ",
          "Sụn tái tạo rất nhanh thành sụn chun đàn hồi",
          "Tế bào sụn biến thành tạo cốt bào sản xuất tủy mỡ vàng"
        ],
        answer: 0,
        explain: "Trang 49–50: Khi già, proteoglycan giảm → tính ưa nước giảm; bào quan & hoạt tính men giảm nhưng hàm lượng glycogen TĂNG; ổ sụn chết bị xâm nhập chất căn bản & collagen; sụn ngấm canxi trở nên đục, cứng nhưng giòn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Câu ghép cặp tr.50)",
        q: "Về tính chất của 3 loại sụn (đối chiếu lý thuyết trang 47–49 và Câu hỏi tự lượng giá trang 50), nhận định nào sau đây CHÍNH XÁC nhất?",
        source: "Mô học Trần Công Toại – Mục III–VI (tr. 47–50)",
        options: [
          "Cả 3 loại sụn đều KHÔNG chứa mạch máu; sụn xơ & sụn diện khớp không có màng sụn; sụn trong có cầu sụn rất giàu chondroitin sulfat",
          "Sụn chun có rất nhiều mạch máu và hay bị vôi hóa ở người già",
          "Sụn xơ có màng sụn dày nhất và sinh sản chủ yếu bằng đắp thêm",
          "Chỉ có sụn trong chứa chondroitin sulfat còn sụn chun tuyệt đối không có"
        ],
        answer: 0,
        explain: "Trang 47–49 nêu rõ: mô sụn không có mạch máu; ngoại trừ sụn diện khớp và sụn xơ, các sụn khác có màng sụn; sụn trong, chun, xơ đều có chất căn bản chứa chondroitin sulfat (nhiều nhất ở sụn trong). (Lưu ý khi làm đề có Câu ghép cặp 3–7 tr.50 cần đối chiếu kỹ nguyên văn trang 47–49)."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Đọc tiêu bản sụn",
        q: "Trên tiêu bản mô học sụn (Hình 4.2), dấu hiệu nào cho biết một nhóm 4 tế bào sụn nằm chung trong 1 ổ sụn vừa trải qua 'sinh sản gian bào kiểu vòng'?",
        source: "Mô học Trần Công Toại – Hình 4.2 & 4.4 (tr. 47, 49)",
        options: [
          "Các tế bào cùng nguồn xếp thành cụm vòng tròn/hình hoa thị nằm sát nhau trong cùng ổ sụn, quanh có cầu sụn đậm màu",
          "Các tế bào xếp thành chuỗi thẳng đứng một hàng dọc giống chồng đồng xu",
          "Tế bào nằm rời rạc ở lớp ngoài màng sụn giữa các bó sợi collagen",
          "Tế bào hình đa nhân khổng lồ đang tiết proton H⁺"
        ],
        answer: 0,
        explain: "Trang 47 & 49: Sinh sản gian bào kiểu vòng có mặt phẳng phân chia đổi hướng tạo nhóm tế bào sụn cùng nguồn xếp theo kiểu vòng trong ổ sụn, xung quanh có cầu sụn đậm màu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng thực tế",
        q: "Trong phẫu thuật tạo hình mũi hoặc tai bằng mô sụn tự thân/đồng loài, vì sao mảnh sụn ghép có thể tồn tại lâu dài mà hầu như không bị hệ miễn dịch thải ghép mạnh như ghép tạng giàu mạch máu (thận, tim)?",
        source: "Mô học Trần Công Toại – Mục III (tr. 47)",
        options: [
          "Vì chất căn bản sụn cho chất chuyển hóa nhỏ khuếch tán qua lại nhưng ngăn không cho các phân tử protein lớn có tính kháng nguyên xâm nhập vào miếng sụn (kèm mô sụn vô mạch)",
          "Vì miếng sụn tiết ra IgE ức chế hoàn toàn tế bào T hỗ trợ của người nhận",
          "Vì tế bào sụn thuộc hệ thống thực bào tiêu hủy toàn bộ kháng thể",
          "Vì màng sụn tạo lớp sừng hóa dày không cho nước thấm qua"
        ],
        answer: 0,
        explain: "Trang 47: Chất căn bản sụn ưa nước khuếch tán được muối khoáng, chất chuyển hóa và khí, nhưng các phân tử protein lớn có tính kháng nguyên không thể vào miếng sụn → ghép sụn dễ dàng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh học",
        q: "Khi bị chấn thương rách sâu vùng sụn khớp (mặt khớp đầu xương dài) ở người trưởng thành, vì sao khả năng tái tạo hồi phục của sụn khớp lại RẤT KÉM và chậm?",
        source: "Mô học Trần Công Toại – Mục V & VI.2 (tr. 48–50)",
        options: [
          "Vì sụn khớp không có mạch máu, không có màng sụn (nguồn tế bào ít biệt hóa tái tạo) và ở người trưởng thành tế bào sụn gần như ngừng phân chia",
          "Vì sụn khớp bị vôi hóa 100% thành xương Havers đặc ngay từ lúc sinh",
          "Vì dịch khớp chứa enzym collagenase tiêu hủy ngay mọi nguyên bào sụn",
          "Vì sụn khớp chứa sợi chun nên không bao giờ tăng sinh"
        ],
        answer: 0,
        explain: "Trang 48–50: Sự tái tạo mô sụn xảy ra chậm chạp nhờ sự sinh sản của tế bào ít biệt hóa của màng sụn; mà sụn khớp lại KHÔNG có màng sụn, không mạch máu và tế bào sụn người lớn đã ngừng phân chia."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đọc tiêu bản đối chiếu",
        q: "Soi 3 mẫu tiêu bản mô sụn khác nhau: Mẫu I nền đồng nhất mịn bắt màu xanh tím có nhiều nhóm tế bào xếp vòng trong ổ sụn; Mẫu II có nhiều sợi tối màu uốn lượn bao quanh ổ sụn; Mẫu III có từng hàng tế bào sụn xen giữa các bó sợi song song rõ rệt. Thứ tự I–II–III là:",
        source: "Mô học Trần Công Toại – Mục IV & Hình 4.2 (tr. 47–48)",
        options: [
          "Mẫu I: Sụn trong; Mẫu II: Sụn chun; Mẫu III: Sụn xơ",
          "Mẫu I: Sụn xơ; Mẫu II: Sụn trong; Mẫu III: Sụn chun",
          "Mẫu I: Sụn chun; Mẫu II: Sụn xơ; Mẫu III: Sụn trong",
          "Cả 3 mẫu đều là mô xương đặc ở các góc cắt khác nhau"
        ],
        answer: 0,
        explain: "Trang 47–48 (Hình 4.2): Sụn trong nền đồng nhất (collagen II mảnh); Sụn chun có sợi chun quanh ổ sụn; Sụn xơ có bó sợi collagen týp I lớn song song rõ dưới KHV quang học."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng vùng sụn tiếp hợp",
        q: "Tại lớp 'sụn xếp hàng' của sụn tiếp hợp ở đầu xương dài trẻ em, kiểu sinh sản nào của tế bào sụn đang hoạt động mạnh nhất để tạo thành các cột tế bào sụn thẳng tắp hướng về thân xương?",
        source: "Mô học Trần Công Toại – Mục VI.1 (tr. 49) & Sụn tiếp hợp (tr. 60)",
        options: [
          "Sinh sản gian bào kiểu trục (mặt phẳng phân chia không đổi)",
          "Sinh sản gian bào kiểu vòng",
          "Sinh sản đắp thêm từ tủy mỡ vàng",
          "Sự xâm nhập trực tiếp của hủy cốt bào đa nhân"
        ],
        answer: 0,
        explain: "Trang 49 (Hình 4.4): Sinh sản gian bào kiểu trục là tế bào sụn phân chia nhiều lần với mặt phẳng phân chia không đổi, xếp thành hàng dọc (cơ sở tạo lớp sụn xếp hàng ở sụn tiếp hợp)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh sinh",
        q: "Ở vùng trung tâm của một miếng sụn sườn lớn ở người già bị rối loạn dinh dưỡng do khuếch tán từ màng sụn không tới kịp, biến đổi mô bệnh học nào có thể xuất hiện tại vùng trung tâm miếng sụn đó?",
        source: "Mô học Trần Công Toại – Mục VI.2 (tr. 50)",
        options: [
          "Có thể xuất hiện mạch máu xâm nhập vào vùng giữa miếng sụn và hiện tượng cốt hóa từng vùng (hoặc ngấm canxi làm sụn đục giòn)",
          "Biến đổi toàn bộ thành mô mỡ nâu chứa nhiều ty thể",
          "Mọc thêm lông chuyển để tự hút chất dinh dưỡng",
          "Tăng gấp đôi hàm lượng proteoglycan ưa nước ở vùng trung tâm"
        ],
        answer: 0,
        explain: "Trang 50: Khi già, sụn ngấm canxi vài nơi trở nên đục, cứng, giòn hơn; do rối loạn dinh dưỡng ở vùng giữa miếng sụn, có thể xuất hiện mạch máu và cốt hóa từng vùng."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng lâm sàng",
        q: "Trong thoái hóa khớp ở người lớn tuổi, triệu chứng đau cứng và giảm khả năng chịu nén của sụn khớp liên quan trực tiếp đến suy giảm phân tử nào làm giảm lượng nước giữ trong chất căn bản sụn?",
        source: "Mô học Trần Công Toại – Mục III & VI.2 (tr. 47, 49)",
        options: [
          "Giảm hàm lượng proteoglycan / glycosaminoglycan (chondroitin sulfat) làm giảm tính ưa nước và độ đàn hồi của sụn",
          "Giảm sản xuất keratin ở lớp hạt",
          "Tăng quá mức các hạt eleidin trong dịch khớp",
          "Mất hoàn toàn màng sụn vốn không bao giờ tồn tại ở sụn khớp"
        ],
        answer: 0,
        explain: "Trang 47 & 49: Chondroitin sulfat (40% trọng lượng khô) và proteoglycan quyết định tính rắn, đàn hồi và ưa nước; khi già proteoglycan giảm nên tính ưa nước giảm làm sụn kém đàn hồi, dễ hư khớp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ giải phẫu – chức năng",
        q: "Vì sao đĩa sụn ở vành tai hoặc nắp thanh quản dù bị uốn gập lặp đi lặp lại suốt đời vẫn bật trở về hình dạng ban đầu và KHÔNG bị vôi hóa cứng đơ khi về già?",
        source: "Mô học Trần Công Toại – Mục IV (tr. 48)",
        options: [
          "Vì là sụn chun chứa mạng sợi chun đàn hồi dày đặc quanh ổ sụn và sụn chun KHÔNG BAO GIỜ có hiện tượng vôi hóa",
          "Vì vành tai cấu tạo bởi mô xương Havers xốp",
          "Vì nắp thanh quản chứa rất nhiều tinh thể hydroxyapatite di động",
          "Vì biểu mô lát tầng sừng hóa đẩy lại vành tai"
        ],
        answer: 0,
        explain: "Trang 48: Sụn chun gặp ở vành tai và nắp thanh quản, thành phần sợi là sợi chun đàn hồi và đặc biệt sụn chun KHÔNG BAO GIỜ có hiện tượng vôi hóa."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: MÔ XƯƠNG (ĐẠI THỂ, 3 TẾ BÀO, KHỚP, TẠO XƯƠNG & 4 BỆNH LÝ)
  // Base (6): L1=1, L2=4, L3=1 | Extra (18): L1=5, L2=5, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  8: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Điều hòa Ca)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tu sửa xương)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bệnh lý)" },
      { level: 3, ksa: "S", ksaLabel: "S3: Tu sửa Havers" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Tỷ lệ hóa học chuẩn của chất hữu cơ và chất vô cơ trong mô xương bình thường là:",
        source: "Mô học Trần Công Toại – Mục I (tr. 51, 56)",
        options: [
          "30% chất hữu cơ (95% là collagen týp I, ít V) và 70% chất vô cơ (chủ yếu Ca₉(PO₄)₆ và hydroxyapatite Ca₅(PO₄)₃OH)",
          "70% chất hữu cơ và 30% chất vô cơ",
          "50% nước, 40% chondroitin sulfat và 10% tế bào",
          "80% collagen týp II và 20% elastin"
        ],
        answer: 0,
        explain: "Trang 51 & 56: Xương chứa 30% chất hữu cơ (95% là collagen týp I, ít V; 5% proteoglycan, glycoprotein, osteonectin, osteocalcin) và 70% chất vô cơ."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Đơn vị cấu tạo của mô xương là lá xương. Chiều dày trung bình của mỗi lá xương là bao nhiêu và chịu được lực kéo – nén tối đa bao nhiêu?",
        source: "Mô học Trần Công Toại – Mục I & II (tr. 51–52)",
        options: [
          "Mỗi lá xương dày khoảng 7 µm; chịu lực kéo 15 kg/mm² và lực nén 10 kg/mm²",
          "Mỗi lá xương dày 64 nm; chịu lực kéo 1 kg/mm²",
          "Mỗi lá xương dày 500 µm; chịu lực nén 100 kg/mm²",
          "Mỗi lá xương dày 2,98 µm; không chịu được lực kéo"
        ],
        answer: 0,
        explain: "Trang 51–52: Xương có thể chịu lực kéo 15 kg/mm² và lực nén 10 kg/mm²; chiều dày mỗi lá xương khoảng 7 µm."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Trong chất nền xương hữu cơ (5% không collagen), hai protein đặc hiệu giữ vai trò gắn collagen với muối khoáng và gắn canxi vào quá trình canxi hóa lần lượt là:",
        source: "Mô học Trần Công Toại – Mục III.2 (tr. 56)",
        options: [
          "Osteonectin (gắn collagen với muối khoáng) và Osteocanxi / Osteocalcin (liên kết canxi giúp canxi hóa)",
          "Villin và Fimbrin",
          "Elastin và Fibronectin",
          "Keratohyalin và Eleidin"
        ],
        answer: 0,
        explain: "Trang 56: Osteonectin là protein đặc hiệu liên kết collagen và muối khoáng; osteocanxi (osteocalcin) là protein liên kết canxi có vai trò quan trọng trong quá trình canxi hóa."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nguồn gốc chính xác của ba loại tế bào xương (Tạo cốt bào, Cốt bào, Hủy cốt bào) lần lượt là:",
        source: "Mô học Trần Công Toại – Mục III.1 (tr. 54–55)",
        options: [
          "Tạo cốt bào: từ tế bào sinh xương (trung mô chưa biệt hóa); Cốt bào: từ tạo cốt bào; Hủy cốt bào: từ một dòng mono bào đặc biệt trong tủy xương",
          "Cả ba loại tế bào đều biệt hóa trực tiếp từ tế bào sụn trong",
          "Tạo cốt bào: từ mono bào máu; Hủy cốt bào: từ nguyên bào sợi",
          "Cốt bào: từ tế bào nội mô; Hủy cốt bào: từ tương bào"
        ],
        answer: 0,
        explain: "Trang 54–55: Tạo cốt bào từ tế bào sinh xương (trung mô); Cốt bào từ tạo cốt bào; Hủy cốt bào từ một dòng mono bào đặc biệt trong tủy xương."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ba loại tế bào trong lớp phủ bề mặt của màng hoạt dịch khớp động giữ chức năng gì?",
        source: "Mô học Trần Công Toại – Mục III.5 (tr. 57)",
        options: [
          "Tế bào A: khớp thực bào; Tế bào B: tế bào sợi khớp tạo dịch khớp và acid hyaluronic; Tế bào C: trung gian giữa A và B",
          "Tế bào A: tạo xương; Tế bào B: hủy xương; Tế bào C: tạo máu",
          "Tế bào A: tiết nhầy PAS+; Tế bào B: tiết nước; Tế bào C: tiết hormon",
          "Tế bào A: lót mạch máu; Tế bào B: chứa melanin; Tế bào C: chứa giọt mỡ"
        ],
        answer: 0,
        explain: "Trang 57: Trong lớp phủ màng hoạt dịch có 3 loại tế bào: Tế bào A (tế bào khớp thực bào), Tế bào B (tế bào sợi khớp tạo dịch khớp và acid hyaluronic), Tế bào C (trung gian giữa A và B)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu trúc thân xương)",
        q: "Cắt ngang qua thân một xương dài trưởng thành từ ngoài màng xương vào đến ống tủy gồm ba lớp theo đúng thứ tự là:",
        source: "Mô học Trần Công Toại – Mục II (tr. 52–53)",
        options: [
          "Lớp ngoài mỏng (hệ thống cơ bản ngoài) → Lớp giữa dày nhất (xương Havers đặc) → Lớp trong rất mỏng (hệ thống cơ bản trong)",
          "Lớp ngoài (xương xốp) → Lớp giữa (tủy đỏ) → Lớp trong (sụn tiếp hợp)",
          "Lớp ngoài (hệ thống cơ bản trong) → Lớp giữa (màng hoạt dịch) → Lớp trong (hệ thống Havers)",
          "Lớp ngoài (màng trong xương) → Lớp giữa (tủy vàng) → Lớp trong (hệ thống cơ bản ngoài)"
        ],
        answer: 0,
        explain: "Trang 52–53: Cắt ngang thân xương dài từ màng xương vào ống tủy có 3 lớp: lớp ngoài mỏng (hệ thống cơ bản ngoài đồng tâm trục thân), lớp giữa dày nhất (xương Havers đặc) và lớp trong rất mỏng (hệ thống cơ bản trong)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tế bào xương)",
        q: "Vai trò của Hủy cốt bào tại vùng màng tế bào có nhiều nếp gấp áp sát vào vách xương là gì?",
        source: "Mô học Trần Công Toại – Mục III.1.3 & Hình 5.4 (tr. 55)",
        options: [
          "Giải phóng proton H⁺ hòa tan tinh thể hydroxyapatite rồi giải phóng enzym thủy phân các sợi collagen đã tách rời, tái hấp thu và đưa ion vào máu",
          "Tổng hợp chất dạng xương (tiền xương) rồi đóng gói tinh thể hydroxyapatite vào túi chế tiết",
          "Vận chuyển dịch giàu glycoprotein nối tiếp xúc giữa các cốt bào trong ổ xương",
          "Chế tiết prostaglandin để ngừng hoàn toàn quá trình tu sửa xương"
        ],
        answer: 0,
        explain: "Trang 55: Màng tế bào nơi áp sát vách xương có nhiều nếp gấp (ống nhỏ) giải phóng enzym và proton H⁺: H⁺ hòa tan hydroxyapatite trước, tách rời collagen cho enzym phân hủy sau."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Sụn tiếp hợp)",
        q: "Thứ tự 4 lớp của sụn tiếp hợp tại vùng chuyển tiếp của xương dài đang tăng trưởng (tính từ đầu xương hướng về thân xương) là:",
        source: "Mô học Trần Công Toại – Mục IV.3 (tr. 60)",
        options: [
          "(1) Sụn trong → (2) Sụn xếp hàng → (3) Sụn phì đại → (4) Vùng xâm nhập mạch máu – mô liên kết (vùng sụn nhiễm canxi)",
          "(1) Sụn xơ → (2) Sụn chun → (3) Đường xi măng → (4) Ống tủy",
          "(1) Sụn phì đại → (2) Sụn xếp hàng → (3) Sụn trong → (4) Bao xương",
          "(1) Màng sụn → (2) Viền tiền cốt → (3) Sụn trong → (4) Sụn khớp"
        ],
        answer: 0,
        explain: "Trang 60: Sụn tiếp hợp gồm các lớp theo thứ tự từ đầu xương hướng về thân xương: (1) sụn trong, (2) sụn xếp hàng, (3) sụn phì đại và (4) vùng xâm nhập mạch máu – mô liên kết (vùng sụn nhiễm canxi)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cốt hóa)",
        q: "So sánh hai kiểu cốt hóa tạo xương nguyên phát: Cốt hóa màng (xương sọ) và Cốt hóa trong sụn (xương dài):",
        source: "Mô học Trần Công Toại – Mục IV.2–3 (tr. 58–59)",
        options: [
          "Cốt hóa màng: tạo trực tiếp trên giá đỡ vách đậm đặc từ mô liên kết trung mô; Cốt hóa trong sụn: tạo trên nền mô hình sụn trong bị phì đại – canxi hóa và mạch máu xâm nhập phá hủy",
          "Cốt hóa màng xảy ra ở thân xương đùi; Cốt hóa trong sụn chỉ xảy ra ở xương vòm sọ",
          "Cốt hóa màng do hủy cốt bào tạo lá xương; Cốt hóa trong sụn không cần mạch máu",
          "Cả hai kiểu tạo xương nguyên phát đều không cần tạo cốt bào"
        ],
        answer: 0,
        explain: "Trang 58–59: Cốt hóa màng biến đổi trực tiếp mô liên kết trung mô thành giá đỡ để tạo cốt bào đắp xương (xương sọ); cốt hóa trong sụn dựa trên mô hình sụn trong."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ngấm canxi)",
        q: "Trong giai đoạn canxi hóa lá xương, quá trình hình thành tinh thể hydroxyapatite diễn ra qua hai bước nào và tỷ lệ muối tiêu thụ ngay ban đầu là bao nhiêu?",
        source: "Mô học Trần Công Toại – Mục IV.5.2 (tr. 62)",
        options: [
          "Qua 2 giai đoạn 'tạo nhân' (trụ bình hành) và 'bồi tụ'; sự bồi tụ ban đầu nhanh mạnh tiêu thụ hết ngay 75% lượng muối phốt phát canxi sẵn có (hoàn tất sau nhiều tuần)",
          "Qua 1 bước kết tinh trực tiếp 100% trong vòng 1 giờ",
          "Nhờ sự hòa tan hydroxyapatite bởi proton H⁺ của hủy cốt bào",
          "Nhờ chondroitin sulfat biến thành elastin 750 acid amin"
        ],
        answer: 0,
        explain: "Trang 62: Tinh thể hydroxyapatite hình thành qua 2 giai đoạn tạo nhân (trụ bình hành) và bồi tụ; sự bồi tụ ban đầu tiêu thụ hết ngay 75% lượng muối phốt phát canxi sẵn có và mất nhiều tuần mới hoàn tất."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh học",
        q: "Một bệnh nhi 18 tháng tuổi đến khám vì thóp chậm đóng, xương sườn lõm nổi chuỗi hạt sườn, tay chân cong và khớp sưng (Hình 5.11). Biến đổi thành phần mô học chất nền xương của trẻ là gì?",
        source: "Mô học Trần Công Toại – Mục IV.6 & Hình 5.11 (tr. 61–62)",
        options: [
          "Thiếu vitamin D / canxi làm giảm hấp thu Ca & P ở ruột → phần hữu cơ vẫn phát triển bình thường nhưng giảm vôi hóa (giảm vô cơ) nên xương mềm cong",
          "Thiếu vitamin C làm giảm tổng hợp collagen hữu cơ nhưng ngấm canxi tăng cao",
          "Tăng quá mức hoạt động tạo cốt bào so với hủy cốt bào gây đặc xương toàn thân",
          "Thiếu sợi elastin ở sụn vành tai và nắp thanh quản"
        ],
        answer: 0,
        explain: "Trang 61–62 (Hình 5.11): Bệnh còi xương (rickets) do thiếu canxi hoặc vitamin D làm xương giảm mức độ vôi hóa (giảm vô cơ) trong khi thành phần hữu cơ vẫn phát triển bình thường → xương mềm dễ cong và biến dạng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng biểu đồ tr. 63",
        q: "Phân tích mẫu xương sinh thiết ở phụ nữ 68 tuổi mãn kinh bị gãy cổ xương đột ngột sau ngã nhẹ: tổng khối lượng mô xương giảm hẳn (bè xương mảnh, vỏ mỏng), nhưng xét nghiệm tỷ lệ phần trăm giữa chất VÔ CƠ và chất HỮU CƠ trong phần xương còn lại vẫn giữ xấp xỉ 70% : 30%. Bệnh lý phù hợp nhất là:",
        source: "Mô học Trần Công Toại – Mục IV.6 & Biểu đồ (tr. 63)",
        options: [
          "Bệnh loãng xương (Osteoporosis) – giảm cả thành phần vô cơ và hữu cơ với tỷ lệ không thay đổi",
          "Bệnh nhuyễn xương (Osteomalacia) – giảm vô cơ và tăng hữu cơ",
          "Bệnh Scocbut (Scurvy) – giảm riêng hữu cơ",
          "Bệnh còi xương cấp ở trẻ đang tăng trưởng"
        ],
        answer: 0,
        explain: "Trang 63 (Biểu đồ so sánh): Ở bệnh loãng xương (người già, nữ mãn kinh, ít vận động, corticoid), tạo xương chậm hơn hủy xương làm khối lượng xương giảm dần, GIẢM CẢ VÔ CƠ VÀ HỮU CƠ nhưng TỶ LỆ hai thành phần KHÔNG THAY ĐỔI."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận cơ chế",
        q: "Ngược lại với còi xương/nhuyễn xương, bệnh nhân thiếu Vitamin C nặng (bệnh Scocbut – Hình 5.12) có biểu hiện chảy máu chân răng, da tái thiếu máu, mắt trũng và chiều dày xương giảm dễ gãy. Cơ chế tổn thương xương trong Scocbut khác với Còi xương ở điểm cốt lõi nào?",
        source: "Mô học Trần Công Toại – Mục IV.6 & Hình 5.12 (tr. 62)",
        options: [
          "Scocbut làm GIẢM tổng hợp chất căn bản & collagen hữu cơ nhưng KHÔNG làm giảm sự nhiễm canxi (vô cơ); còn Còi xương giữ/tăng hữu cơ nhưng GIẢM nhiễm canxi",
          "Scocbut chỉ xảy ra ở trẻ sơ sinh thiếu mỡ nâu",
          "Scocbut làm tăng quá mức chiều dày màng ngoài xương",
          "Cả hai bệnh đều do thừa vitamin D và tăng calcitonin"
        ],
        answer: 0,
        explain: "Trang 62: Scocbut do thiếu vitamin C đưa đến giảm chất căn bản xương (tổng hợp chất hữu cơ giảm) mà KHÔNG làm giảm sự nhiễm canxi (vô cơ) → chiều dày xương giảm dễ gãy; ngược với còi xương (giảm vôi hóa)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đọc hình 5.9",
        q: "Quan sát một hệ thống Havers ĐANG HÌNH THÀNH (Hình 5.9 B–C) trong thân xương đặc: lá xương ở sát ngoài cạnh đường xi măng so với lá xương ở sát lòng ống Havers có điểm gì khác nhau?",
        source: "Mô học Trần Công Toại – Mục IV.4 (tr. 61)",
        options: [
          "Lá xương ngoài cùng già hơn và đã canxi hóa đầy đủ (chứa cốt bào trong ổ xương); lá xương trong cùng mới đắp sau cùng còn là chất dạng xương (viền tiền cốt)",
          "Lá xương trong cùng canxi hóa trước rồi mới lan dần ra đường xi măng",
          "Lá ngoài cùng luôn là sụn trong; lá trong cùng là mô mỡ vàng",
          "Tất cả các lá xương trong hệ thống Havers hình thành cùng một giây"
        ],
        answer: 0,
        explain: "Trang 61: Trong tu sửa Havers, các lá được đắp từ ngoài vào trong; do đó các lá ở ngoài cùng được canxi hóa đầy đủ chứa cốt bào, còn lá ở trong cùng cấu tạo bởi chất dạng xương (viền tiền cốt)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng tế bào học",
        q: "Cốt bào nằm bị giam hãm sâu bên trong chất nền xương đã vôi hóa cứng đặc, vậy làm sao chúng vẫn trao đổi được chất dinh dưỡng từ máu trong ống Havers và cảm nhận lực cơ học để duy trì xương?",
        source: "Mô học Trần Công Toại – Mục III.1.2 & Hình 5.3 (tr. 54)",
        options: [
          "Nhờ các nhánh bào tương mảnh nằm trong hệ thống VI QUẢN XƯƠNG chứa dịch lỏng giàu glycoprotein nối thông giữa các ổ xương với nhau và với mạch máu ống Havers",
          "Nhờ chất nền xương xốp đầy các mạch máu lớn đâm trực tiếp vào mọi ổ xương",
          "Nhờ cốt bào có khả năng thực bào mảnh vỡ như đại thực bào bụi",
          "Nhờ tế bào đài tiết nhầy chảy dọc các đường xi măng"
        ],
        answer: 0,
        explain: "Trang 54 & Hình 5.3: Các nhánh bào tương mảnh của cốt bào nằm trong các vi quản xương chứa chất lỏng giàu glycoprotein giúp vận chuyển dinh dưỡng và nối tiếp xúc giữa các cốt bào với nhau."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận thực tế",
        q: "Ở trẻ em 8 tuổi bị gãy gập ngang qua VÙNG CHUYỂN TIẾP (đĩa sụn tiếp hợp) của xương đùi gây tổn thương nặng lớp sụn xếp hàng và sụn phì đại. Nguy cơ di chứng lâu dài đáng lo ngại nhất là gì?",
        source: "Mô học Trần Công Toại – Mục IV.3 (tr. 59–60)",
        options: [
          "Rối loạn hoặc ngừng phát triển CHIỀU DÀI của xương đùi (lệch chi) vì phần lớn sự kéo dài xương xảy ra tại sụn tiếp hợp ở vùng chuyển tiếp",
          "Không còn khả năng tạo tế bào máu trong hạch bạch huyết",
          "Biến đổi toàn bộ xương đùi thành xương dẹt có xoang khí",
          "Làm đóng sớm toàn bộ các đường khớp bất động vòm sọ"
        ],
        answer: 0,
        explain: "Trang 59–60: Vùng chuyển tiếp chứa sụn tiếp hợp là nơi diễn ra phần lớn sự phát triển chiều dài của xương dài trong giai đoạn tăng trưởng (trước khi sụn biến mất hoàn toàn ở người lớn)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Ứng dụng lâm sàng",
        q: "Khi bó bột bất động chi quá lâu hoặc điều trị corticoid kéo dài ở người cao tuổi, tỷ lệ mất xương tăng vọt (loãng xương thứ phát). Dựa trên cơ chế điều hòa tạo cốt bào (tr. 53 & 63), hai nguyên nhân tế bào nào thúc đẩy tình trạng này?",
        source: "Mô học Trần Công Toại – Mục III.1.1 & IV.6 (tr. 53, 63)",
        options: [
          "Thiếu tác động cơ học (vận động) và tác dụng của corticoid/tuổi già làm giảm hoạt động tạo cốt bào khiến tạo xương chậm hơn hủy xương",
          "Tăng tổng hợp quá mức vitamin C làm sụn không vôi hóa được",
          "Chu bào bịt kín hoàn toàn mọi ống Havers",
          "Tăng biệt hóa tế bào trung mô thành tế bào mỡ nâu"
        ],
        answer: 0,
        explain: "Trang 53 & 63: Hoạt động tạo cốt bào phụ thuộc tác động cơ học, hormon, vitamin; bảng tr. 63 ghi rõ nguyên nhân loãng xương gồm thiếu hormon (mãn kinh), tuổi già, ít hoạt động và điều trị corticoid."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Liên hệ chấn thương – chỉnh hình",
        q: "Trong phẫu thuật kết hợp xương gãy, phẫu thuật viên luôn tránh bóc tách phá hủy quá mức MÀNG NGOÀI XƯƠNG quanh ổ gãy. Cơ sở mô học của nguyên tắc bảo tồn này là gì?",
        source: "Mô học Trần Công Toại – Mục III.3 (tr. 56)",
        options: [
          "Lớp trong màng ngoài xương giàu tế bào trung mô / tạo cốt bào giúp đắp các lá xương mới làm dày và hàn liền xương, đồng thời màng ngoài xương mang mạch máu nuôi vỏ xương",
          "Màng ngoài xương là nơi duy nhất chứa các tế bào hủy cốt bào để tiêu sụn khớp",
          "Màng ngoài xương chứa dịch khớp nuôi sụn tiếp hợp",
          "Màng ngoài xương tổng hợp melanin bảo vệ xương khỏi ánh nắng"
        ],
        answer: 0,
        explain: "Trang 56: Lớp trong màng ngoài xương chứa nhiều tế bào trung mô (nguyên bào sợi) có khả năng biến thành tạo cốt bào tạo đắp các lá xương mới gia tăng đường kính và sửa chữa xương."
      }
    ]
  }
};
