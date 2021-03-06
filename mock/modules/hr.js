// 行业资讯
let industrys = [
  {
    id: 1, 
    title: '2018年度人力资源和社会保障事业发展统计公报', 
    url: '/', 
    date: '2019年6月10日',
    source: '中华人民共和国人力资源和社会保障部',
    message: '2018 年是全面贯彻党的十九大精神开局之年，各级人力资源社会保障部门以习近平新时代中国特色社会主义思想为指导，坚决贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，坚持民生为本、人才优先，砥砺奋进，扎实工作， 推动人力资源和社会保障事业取得新发展。', 
    image: 'https://static.weibangong.com/files/5d24477d7da116c88d8a5d3c-big'
  },
  {
    id: 2, 
    title: '2018年北京市社会保险事业发展情况报告', 
    url: '/', 
    date: '2019年6月3日',
    source: '北京市人力资源和社会保障局',
    message: '2018年，北京市各级社保经办机构深入学习贯彻习近平新时代中国特色社会主义思想和十九大精神，牢固树立以人民为中心的发展思想，主动服务首都城市战略定位和京津冀协同发展大局，依法经办、精准管理、优化服务，加强社会保险基金管理，提高风险防范能力，着力提升基金管理和经办服务水平，推动窗口作风建设，各项工作稳步进展。', 
    image: 'https://static.weibangong.com/files/5d2449cc18d17d33d5e73029-big'
  },
  {
    id: 3, 
    title: '北京市2019年养老、失业、工伤保险缴费标准', 
    url: '/', 
    date: '2019年5月30日',
    source: '北京市社会保险网上服务平台',
    message: '2018年本市全口径城镇单位就业人员平均工资94258元。依据国家《降低社会保险费率综合方案》，以城镇非私营单位就业人员平均工资和城镇私营单位就业人员平均工资为基础，核算确定了2018年本市全口径城镇单位就业人员平均工资为94258元，以此作为核定2019年养老保险、失业保险和工伤保险缴费基数的依据。', 
    image: 'https://static.weibangong.com/files/5d2449f0a0efb5b5033c5f41-big'
  },
  {
    id: 5, 
    title: '深圳市人民政府办公厅关于印发深圳市降低社会保险费率实施方案的通知', 
    url: '/', 
    date: '2019年5月14日',
    source: '深圳市社保局',
    message: '深圳市根据《国务院办公厅关于印发降低社会保险费率综合方案的通知》和《广东省人力资源和社会保障厅 广东省财政厅 国家税务总局广东省税务局关于印发广东省城镇职工基本养老保险单位缴费比例过渡方案的通知》，结合深圳市实际情况，引发社会保险费率实施方案。', 
    image: 'https://static.weibangong.com/files/5d244a5ed0b02c7ca387b2dc-big'
  },
  {
    id: 4, 
    title: '江苏省：降低社会保险费率政策解读', 
    url: '/', 
    date: '2019年5月9日',
    source: '江苏省人力资源和社会保障网',
    message: '近日，江苏省政府办公厅印发《江苏省降低社会保险费率实施方案》（苏政办发〔2019〕47号，以下简称《实施方案》），为做好我省降低社会保险费率实施工作，做了如下政策解读。', 
    image: 'https://static.weibangong.com/files/5d244a42032ae5b607f5383a-big'
  },
]

let industrys_details = [
  {
    id: 1,
    title: '2018年度人力资源和社会保障事业发展统计公报',
    abstract: '摘要：2018 年是全面贯彻党的十九大精神开局之年，各级人力资源社会保障部门以习近平新时代中国特色社会主义思想为指导，坚决贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，坚持民生为本、人才优先，砥砺奋进，扎实工作， 推动人力资源和社会保障事业取得新发展。',
    date: '2019年6月10日',
    keywords: '人力资源和社会保障部、劳动就业、社会保险、劳动关系',
    content: `
      <p>2018 年是全面贯彻党的十九大精神开局之年，各级人力资源社会保障部门以习近平新时代中国特色社会主义思想为指导，坚决贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，坚持民生为本、人才优先，砥砺奋进，扎实工作， 推动人力资源和社会保障事业取得新发展。</p>

      <h2>一、劳动就业</h2>
      <p>年末全国就业人员 77586 万人，其中城镇就业人员 43419 万人。全国就业人员中，第一产业就业人员占 26.1%；第二产业就业人员占 27.6%；第三产业就业人员占 46.3%。</p>
      <p>2018 年全国农民工总量 28836 万人，其中外出农民工17266 万人。</p>
      <div class="image">
        <span>图 1	近五年全国就业人员产业构成情况(单位：%)</span>
        <img src="https://static.weibangong.com/files/5d2447fd8cce2907b52e91b1-big" />
      </div>
      <p>全年城镇新增就业 1361 万人，有 551 万城镇失业人员实现再就业，就业困难人员就业 181 万人。年末城镇登记失业人员 974 万人，城镇登记失业率为 3.80%。年末全国城镇调查失业率为 4.9%。全年全国共帮助 4.9 万户零就业家庭实现每户至少一人就业。选派 2.8 万名高校毕业生到基层从事“三支一 扶”服务。截至 2018 年末，累计帮扶 988 万农村建档立卡贫困劳动力实现就业。</p>
      <div class="image">
        <span>图 2	近五年城镇新增就业人数(单位：万人)</span>
        <img src="https://static.weibangong.com/files/5d2447fd8cce2907b52e91b3-big" />
      </div>
      <div class="image">
        <span>图 3	近五年城镇失业人员再就业情况(单位：万人)</span>
        <img src="https://static.weibangong.com/files/5d2447fe043dae8485099294-big" />
      </div>
      <div class="image">
        <span>图 4	近五年城镇登记失业情况(单位：万人，%)</span>
        <img src="https://static.weibangong.com/files/5d244800043dae8485099298-big" />
      </div>
      <p>2018 年末，全行业共有人力资源服务机构 3.57 万家，从业人员 64.14 万人。2018 年，共为 3669 万家次用人单位提供人力资源服务，帮助 2.28 亿人次劳动者实现就业、择业和流动服务。</p>
      <h2>二、社会保险</h2>
      <p>全年基本养老保险、失业保险、工伤保险三项社会保险基金收入合计 57089 亿元，比上年增加 8509 亿元，增长 17.5%；基金支出合计 49208 亿元，比上年增加 7228 亿元，增长 17.2%。</p>
      <div class="image">
        <span>图 5	近五年三项社会保险参保人数(单位：万人)</span>
        <img src="https://static.weibangong.com/files/5d244801043dae848509929a-big" />
      </div>
      <div class="image">
        <span>图 6	近五年三项社会保险基金收支情况(单位：亿元)</span>
        <img src="https://static.weibangong.com/files/5d244803043dae848509929f-big" />
      </div>
      <h3>（一）养老保险</h3>
      <p>年末全国参加基本养老保险人数为 94293 万人，比上年末增加 2745 万人。全年基本养老保险基金总收入 55005 亿元，基金总支出 47550 亿元。年末基本养老保险基金累计结存58152 亿元。</p>
      <p>年末全国参加城镇职工基本养老保险人数为 41902 万人，比上年末增加 1608 万人。其中，参保职工 30104 万人，参保离退休人员 11798 万人，分别比上年末增加 836 万人和 772 万人。年末城镇职工基本养老保险执行企业制度参保人数为36483 万人，比上年末增加 1166 万人。</p>
      <p>全年城镇职工基本养老保险基金收入 51168 亿元，基金支出 44645  亿元。年末城镇职工基本养老保险基金累计结存50901 亿元。2018 年 7 月 1 日，建立实施企业职工基本养老保险基金中央调剂制度，2018 年调剂比例为 3%，调剂基金总规模为 2422 亿元。</p>
      <p>年末城乡居民基本养老保险参保人数 52392 万人，比上年末增加 1137 万人。其中，实际领取待遇人数 15898 万人。2018年，全国 60 岁以上享受城乡居民基本养老保险待遇的贫困老人 2195 万人，实际享受代缴保费的贫困人员 2741 万人，城乡居民基本养老保险使 4936 万贫困人员直接受益。全年城乡居民基本养老保险基金收入 3838 亿元，基金支出 2906 亿元。年末城乡居民基本养老保险基金累计结存 7250 亿元。</p>
      <p>年末全国有 8.74 万户企业建立了企业年金，参加职工2388 万人。年末企业年金基金累计结存 14770 亿元。</p>
      <h3>（二）失业保险</h3>
      <p>年末全国参加失业保险人数为 19643 万人，比上年末增加859 万人。年末全国领取失业保险金人数为 223 万人，比上年末增加 3 万人。全年共为 452 万名失业人员发放了不同期限的失业保险金，比上年减少 6 万人。失业保险金月人均水平 1266 元，比上年增长 13.9%。全年共为领取失业保险金人员代缴基本医疗保险费 92 亿元，比上年增长 8.2%。全年发放稳岗补贴惠及职工 6445 万人，发放技能提升补贴惠及职工 60 万人。</p>
      <p>全年失业保险基金收入 1171 亿元，基金支出 915 亿元。年末失业保险基金累计结存 5817 亿元。</p>
      <h3>（三）工伤保险</h3>
      <p>年末全国参加工伤保险人数为 23874 万人，比上年末增加 1151 万人。截至 2018 年末，全国新开工工程建设项目工伤保险参保率为 99%。全年认定（视同）工伤 110 万人，评定伤残等级 56.9 万人。全年有 199 万人次享受工伤保险待遇。</p>
      <p>全年工伤保险基金收入 913 亿元，基金支出 742 亿元。年末工伤保险基金累计结存 1785 亿元（含储备金 294 亿元）。</p>
      <h2>三、人才人事</h2>
      <p>截至 2018 年末，享受政府特殊津贴专家 18.2 万人，国家百千万人才工程入选者 5700 多人。2018 年，深入开展万名专家服务基层工作，遴选实施 60 项专家服务基层示范项目，遴选设立 20 个国家级专家服务基地，2470 多名专家深入基层一线，培训指导基层专业技术人员 3.9 万多人。</p>
      <p>2018 年，全国共有 1495 万人报名参加专业技术人员资格考试，292.3 万人取得资格证书。截至 2018 年末，全国累计共有 2913 万人取得各类专业技术人员资格证书。</p>
      <p>专业技术人才知识更新工程继续推进。全年举办 300 期高级研修班，培训高层次专业技术人才 2.1 万人次，开展急需紧缺人才培养培训和岗位培训 108.8 万人次。2018 年新建国家级专业技术人员继续教育基地 20 家，总数已达 160 家。少数民族科技骨干特殊培养工作深入实施，全年培养选拔 400 名新疆特培学员和 120 名西藏特培学员，组织 4 期新疆、西藏特培专家服务团活动。</p>
      <p>2018 年，我国各类留学回国人员总数为 51.94 万人。改革开放至 2018 年底，我国累计有 365.14 万人选择在完成学业后回国发展。</p>
      <p>2018 年，博士后科研工作站 3728 个，博士后科研流动站2994 个，累计招收培养博士后 20.7 万人。</p>
      <p>2018 年末全国共有技工院校 2379 所，在校学生 341.6 万人。全年技工院校面向社会开展培训 420.6 万人次。年末全国共有就业训练中心 2298 所，民办培训机构 21565 所。全年共组织各类职业培训 1651 万人次，其中就业技能培训 853 万人次，岗位技能提升培训 552 万人次，创业培训 201 万人次，其他培训 45 万人次。全年各类职业培训中，培训农民工 831 万人次，培训城镇登记失业人员 210 万人次，培训城乡未继续升学的初高中应届毕业生 42 万人次，培训高校应届毕业生 104万人次。</p>
      <p>2018 年末全国共有职业技能鉴定机构 8912 个，职业技能鉴定考评人员25 万人。全年共有1135 万人参加职业技能鉴定，903 万人取得职业资格证书，其中 35 万人取得技师、高级技师职业资格。</p>
      <p>2018 年组织开展国家级一类职业技能大赛 8 项，涵盖 52个世界技能大赛参赛项目和 28 个职业（工种），开展国家级二类职业技能竞赛 51 项，覆盖 104 个职业（工种），有 1000多万人次参加比赛。</p>
      <p>截至 2018 年末，事业单位聘用制度基本实现全覆盖，工作人员聘用合同签订率为 95%。事业单位岗位设置管理制度进一步完善，岗位设置完成率为 97%。事业单位公开招聘制度全面推行，2018 年全国公开招聘事业单位工作人员 106.6万人，其中中央事业单位 10.3 万人、地方事业单位 96.3 万人。落实事业单位基本工资正常调整机制，调整事业单位工作人员基本工资标准。完善基层医疗卫生机构绩效工资政策，推进公立医院薪酬制度改革试点。进一步明确具体政策，保障义务教育教师工资待遇。</p>
      <h2>四、劳动关系</h2>
      <p>2018 年全国企业劳动合同签订率达 90%以上。截至 2018 年末，全国报送人力资源社会保障部门审查并在有效期内的集体合同累计 175 万份，覆盖职工 1.55 亿人。截至 2018 年末，经各级人力资源社会保障部门审批且在有效期内实行特殊工 时制度的企业 8.3 万户，涉及职工 1300 万人。继续开展企业薪酬调查工作，合理调整最低工资标准。</p>
      <p>2018 年，全国各地劳动人事争议调解仲裁机构共处理争议 182.6 万件，涉及劳动者 217.8 万人，涉案金额 402.6 亿元。全年办结争议案件 171.5 万件，案件调解成功率为 68.7%，仲裁结案率为 95.1%。终局裁决 13.6 万件，占裁决案件数的37.9%。</p>
      <p>2018  年，全国各级劳动保障监察机构共主动检查用人单位 138.1 万户次，涉及劳动者 6240.3 万人次。书面审查用人单位 199.5 万户次，涉及劳动者 6792.5 万人次。全年共查处各类劳动保障违法案件 13.9 万件。通过加大劳动保障监察执法力度，为 168.9 万名劳动者追发工资等待遇 160.4 亿元。共督促用人单位与劳动者补签劳动合同 106.3 万份，督促 0.9 万户用人单位办理社保登记，督促 1.9 万户用人单位为 37.3 万名劳动者补缴社会保险费 9.3 亿元。加强人力资源市场监管，依法取缔非法职业中介机构 1235 户。</p>
      <h2>五、行风和基础建设</h2>
      <p>全国人社系统行风建设成效明显。制定发布系统行政审批和公共服务事项清单，清理证明事项，全面取消领取社会保险待遇资格集中认证，推进审批服务优质化、便民化。加强标准化信息化建设。加强窗口经办队伍建设，开展窗口单位业务技能练兵比武活动和 “人社服务标兵”主题宣传活动。建立行风建设投诉举报专区，处理投诉举报案件，地市级以上人社部门行风建设举报投诉电话开通率为 98%。</p>
      <p>法治建设稳步推进。2018 年 12 月 29 日，第十三届全国人大常委会第七次会议通过了《全国人民代表大会常务委员会关于修改<中华人民共和国劳动法>等七部法律的决定》和《全国人民代表大会常务委员会关于修改<中华人民共和国社会保险法>的决定》，自公布之日起施行。基本劳动标准法列入第十三届全国人大常委会立法规划。2018 年 6 月 29 日，国务院公布《人力资源市场暂行条例》，自 2018 年 10 月 1 日起施行。2018 年 8 月 23 日，公布《人力资源社会保障部关于废止<台湾香港澳门居民在内地就业管理规定>的决定》（人社部令第 37 号），自公布之日起生效。2018 年 12 月 14 日，公布《人力资源社会保障部关于修改部分规章的决定》（人社部令第 38 号），自公布之日起施行。深入开展法治宣传教育，组织开展全国人力资源和社会保障法治知识竞赛活动。</p>
      <p>截至 2018 年末，全国 31 个省份和新疆生产建设兵团均已发行全国统一的社会保障卡，覆盖所有地区。全国社会保障卡持卡人数为 12.27 亿人，社会保障卡普及率为 88%。全国大部分地市全面开通 102 项社会保障卡应用。全国 31 个省份和新疆生产建设兵团均已建设机关事业单位养老保险信息系统。全国 12333 电话咨询服务全年来电总量为 1.34 亿次。</p>
      <div>
        <p>注：</p>
        <p>1.	本公报中的各项统计数据均未包括香港特别行政区、澳门特别行政区和台湾省。</p>
        <p>2.	本公报中的有关数据为正式年报数据。</p>
        <p>3.	全国就业人员及分三次产业人员数据、城镇调查失业率数据、全国农民工数量有关数据来源于国家统计局。</p>
        <p>4.	本公报中部分数据因四舍五入原因，存在着与分项合计不等的情况；增量及增长率根据四舍五入前数据计算。</p>
      </div>
    `
  },
  {
    id: 2,
    title: '2018年北京市社会保险事业发展情况报告',
    abstract: '2018年，北京市各级社保经办机构深入学习贯彻习近平新时代中国特色社会主义思想和十九大精神，牢固树立以人民为中心的发展思想，主动服务首都城市战略定位和京津冀协同发展大局，依法经办、精准管理、优化服务，加强社会保险基金管理，提高风险防范能力，着力提升基金管理和经办服务水平，推动窗口作风建设，各项工作稳步进展。',
    date: '2019年6月10日',
    keywords: '北京、社会保险、养老保险、京津冀',
    content: `
      <p>2018年，我市各级社保经办机构深入学习贯彻习近平新时代中国特色社会主义思想和十九大精神，牢固树立以人民为中心的发展思想，主动服务首都城市战略定位和京津冀协同发展大局，依法经办、精准管理、优化服务，加强社会保险基金管理，提高风险防范能力，着力提升基金管理和经办服务水平，推动窗口作风建设，各项工作稳步进展。</p>
      <h2>一、 养老保险</h2>
      <p>2018年，继续推进登记制度改革，完善社会保险登记流程，加快推进基础信息库建设；积极落实养老保险基金中央调剂制度。</p>
      <h3>（一）职工基本养老保险</h3>
      <p>年末全市参加职工基本养老保险单位61万户，比上年增加6.4万户，增长11.7%。参保人员1685.8万人，比上年增加81.3万人，增长5.1%，其中 离退休人员293.6万人，比上年增加10.5万人，增长 3.7%。</p>
      <p>全年职工基本养老保险基金收入2619.5亿元，比上年增加396.6亿元，增幅17.8%;基金支出1716.2亿元，比上年增加321.8亿元，增幅23.1%；基金当年结余903.3亿元。</p>
      <p>2018年，本市继续提高企业退休人员基本养老金水平，月人均基本养老金比上年增长5.5%。</p>
      <p>积极落实基本养老保险转移接续政策，全年企业职工基本养老保险跨省转入本市3.4万人，从本市转出8.1万人。与天津、河北紧密合作，促进三地间社会保险转移衔接平稳，京津冀三地间的转移接续业务量占到全部业务总量的20%。</p>
      <h3>（二）城乡居民养老保障</h3>
      <p>年末全市参加城乡居民养老保障209万人，其中，城乡居民参保21.4万人，农民参保187.6万人。</p>
      <p>2018年，本市继续落实城乡居民养老金正常调整机制。基础养老金从每人每月610元提高至人均每月710元；福利养老金从每人每月525元提高至人均每月625元。年末88.9万人享受城乡居民养老保险待遇（其中：享受老年保障福利养老金人员为38.2万人）。</p>
      <p>全年城乡居民养老保障基金收入86.8亿元，基金支出77.7亿元，基金当年结余9.1亿元。</p>
      <h2>二、 医疗保险</h2>
      <p>2018年全面实施统一的城乡居民医保制度，进一步健全全民医保体系；进一步扩大报销品种，进一步完善价格动态调整机制，进一步深化医保付费方式改革，提高基金使用率，稳步推进异地结算，加强对医疗行为的监管，保障基金安全。年末全市社保卡累计发卡人数2218.7万人。</p>
      <h3>（一）职工基本医疗保险</h3>
      <p>年末全市参加职工基本医疗保险单位55.8万户，比上年增加5.6万户，增长11.1%。参保人员1628.9万人，比上年增加59.7万人，增长3.8%，其中退休人员296.9万人，比上年增加10.7万人，增长3.7%。</p>
      <p>全年职工基本医疗保险基金收入1209亿元，比上年增加 168.9亿元，增长16.2%;基金支出974.7亿元，比上年增加76.7亿元，增长8.5%；基金当年结余234.3亿元。</p>
      <p>全年全市医疗保险经办机构审核结算职工基本医疗保险费用13743万人次，同比增长7.5%。</p>
      <p>全市共有定点医疗机构2836家，其中三级定点医疗机构109家，二级定点医疗机构122家，一级定点医疗机构491家，一级以下定点医疗机构2114家。在定点医疗机构中，社区卫生服务机构2151家（含中心和站），占定点医疗机构总数的75.8%。全年跨统筹流动就业人员基本医疗保险跨省转入本市2.5万人，从本市转出5.4万人。</p>
      <h3>（二）城乡居民基本医疗保险</h3>
      <p>年末全市参加城乡居民基本医疗保险人员390.8万人，其中：学生儿童221.8万人，无保障老年人110.5万人，无业居民58.5 万人。</p>
      <p>全年城乡居民基本医疗保险基金收入80.5亿元，基金支出79.2亿元，基金当年结余1.3亿元。</p>
      <p>全年全市医疗保险经办机构审核结算城乡居民基本医疗保险费用2637万人次，同比增长8.9%。</p>
      <h2>三、失业保险</h2>
      <p>2018年，本市充分发挥失业保险基金保障生活、促进就业、预防失业的作用，坚持实施就业优先战略和更加积极的就业政策，支持企业稳定就业岗位，鼓励职工提升职业技能，不断提高失业待遇水平。</p>
      <p>年末全市参加失业保险单位59.6万户，比上年增加6.4万户，增长12 %。参保人员1240.7万人，比上年增加70.5万人，增长6%。全年享受失业保险待遇49万人次。</p>
      <p>全年失业保险基金收入104.7亿元，比上年增加22.5亿元，增幅27.4%;基金支出72.2亿元，比上年增加6.3亿元，增长9.6%。基金当年结余32.5亿元。</p>
      <p>自2018年9月1日起，我市失业保险金发放标准在现行基础上，每档增加244元。调整后失业保险金平均发放标准为每人每月1590元，上调18.1%。</p>
      <h2>四、工伤保险</h2>
      <p>2018年，认真贯彻落实相关政策文件，进一步完善部门协同机制，建立适应工伤认定调查、劳动能力鉴定、经办服务一体化建设要求的工伤保险管理服务体制。</p>
      <p>2018年，年末全市参加工伤保险单位61.2万户，比上年增加6.6万户，增长11.9%。参保人员为1187万人，比上年增加69.1万人，增长6.2%。全年享受工伤保险待遇26.7万人次。</p>
      <p>全年工伤保险基金收入40.2亿元，比上年增加2.3亿元，增长6.1%;基金支出36.5亿元，比上年增加 3.5亿元，增长10.5%；基金当年结余3.7亿元。</p>
      <p>2018年，本市继续调整1-4级工伤人员的伤残津贴、护理费以及因工死亡人员供养亲属抚恤金。年末伤残津贴人均4748元/月，供养亲属抚恤金人均2283元／月，工伤人员护理费平均水平为3065元／月。</p>
      <h2>五、生育保险</h2>
      <p>2018年，本市继续完善生育保险政策，参保率和覆盖面进一步扩大。</p>
      <p>年末全市参加生育保险单位59.4万户，比上年增加6.5万户,增长12.1%。参保人员为1104万人，比上年增加68.8万人，增长6.6%。</p>
      <p>全年生育保险基金收入76.1亿元，基金支出82.6亿元，基金当年缺口6.5亿元，基金缺口由生育保险滚存结余弥补。</p>
      <p>全年享受生育保险待遇达61.4万人次，人均生育保险费用全年支出3.9万元。</p>
      <h2>七、社会保险基金运行情况</h2>
      <p>2018年，本市各项社会保险待遇按时足额发放，基金运行平稳。全年社会保险基金收入4216.8亿元，基金支出3039.1亿元，基金当年结余1177.7亿元。为确保社保基金的保值增值，根据本市与全国社保基金理事会的投资管理合同，企业职工养老保险基金结余中2000亿元将用于投资运营，截至2018年年底已划转1500亿元。积极落实养老保险基金中央调剂制度，经人社部和财政部核定，2018年我市养老保险基金上解资金额197亿元，中央下拨资金65.6亿元。</p>
    `
  },
  {
    id: 3,
    title: '北京市2019年养老、失业、工伤保险缴费标准',
    abstract: '2018年本市全口径城镇单位就业人员平均工资94258元。依据国家《降低社会保险费率综合方案》，以城镇非私营单位就业人员平均工资和城镇私营单位就业人员平均工资为基础，核算确定了2018年本市全口径城镇单位就业人员平均工资为94258元，以此作为核定2019年养老保险、失业保险和工伤保险缴费基数的依据。',
    date: '2019年6月10日',
    keywords: '社会保险、养老保险、缴费标准、工伤保险、北京',
    content: `
      <p>2018年本市全口径城镇单位就业人员平均工资94258元。依据国家《降低社会保险费率综合方案》，以城镇非私营单位就业人员平均工资和城镇私营单位就业人员平均工资为基础，核算确定了2018年本市全口径城镇单位就业人员平均工资为94258元，以此作为核定2019年养老保险、失业保险和工伤保险缴费基数的依据。</p>
      <div class="image">
        <img src="https://static.weibangong.com/files/5d244a10c3690ecfe0dd42ea-big" />
      </div>
    `
  },
  {
    id: 4,
    title: '江苏省：降低社会保险费率政策解读',
    abstract: '近日，江苏省政府办公厅印发《江苏省降低社会保险费率实施方案》（苏政办发〔2019〕47号，以下简称《实施方案》），为做好我省降低社会保险费率实施工作，做了如下政策解读。',
    date: '2019年5月9日',
    keywords: '江苏、社会保险、养老保险、缴费比例',
    content: `
      <p>近日，经省政府同意，省政府办公厅印发《江苏省降低社会保险费率实施方案》（苏政办发〔2019〕47号，以下简称《实施方案》），为做好我省降低社会保险费率实施工作，现就有关政策解读如下：</p>
      <h2>一、关于《实施方案》的出台背景。</h2>
      <p>答：社会保险制度事关每个参保人的切身利益，事关改革发展稳定大局。社会保险费是社会保险制度平稳运行的重要物质基础，对于制度的可持续具有重要意义，也直接影响用人单位特别是参保企业的经营成本。近年来，江苏省委、省政府坚决贯彻党中央、国务院关于降低社会保险费率、减轻企业缴费负担的重要部署，先后阶段性降低失业保险费率2个百分点、企业职工养老保险费率1个百分点、工伤保险费率0.5个百分点，合理降低企业特别是中小企业的用工成本，为实体经济发展创造良好环境。随着经济发展进入新常态，企业对于进一步降低社保费率的呼声较高，党中央、国务院对此提出新的要求。4月1日，国务院办公厅印发《降低社会保险费率综合方案》（国办发〔2019〕13号），对降低社会保险费率，完善社会保险制度作出具体安排。按照党中央、国务院决策部署，省委、省政府高度重视，省有关部门抓紧研究拟定了我省降低社会保险费率实施方案，经省政府同意后，报国家人力资源社会保障部、财政部备案同意，并经省政府第31次常务会议审议通过后，4月30日，省政府办公厅印发《江苏省降低社会保险费实施方案》。</p>
      <h2>二、关于《实施方案》的主要内容</h2>
      <p>答：我省《实施方案》与国家方案总体保持一致，总体考虑是，统筹降低社会保险费率、完善社会保险制度、稳步推进社会保险费征收体制改革，确保企业特别是小微企业社会保险缴费负担有实质性下降，确保职工各项社会保险待遇不受影响、按时足额支付。</p>
      <p>《实施方案》共分七个部分，具体包括：一是降低职工基本养老保险单位缴费比例。自2019年5月1日起，将全省企业职工基本养老保险和机关事业单位基本养老保险单位缴费比例统一降至16%。个体工商户和灵活就业人员参加企业职工基本养老保险缴费比例不变。二是继续阶段性降低职工基本医疗保险、失业保险、工伤保险费率。其中职工基本医疗保险阶段性降费率政策执行期限至2019年11月30日；失业、工伤保险现行的阶段性降费率政策到期后再延长一年至2020年4月30日。三是调整社会保险缴费基数政策。将城镇非私营单位和城镇私营单位就业人员平均工资加权计算的全省全口径城镇单位就业人员平均工资作为核定职工缴费基数上下限的指标，个体工商户和灵活就业人员可在省规定缴费基数上下限范围内自愿选择适当的缴费基数。四是加快推进企业职工基本养老保险基金省级统收统支。进一步完善企业职工基本养老保险省级统筹，到2020年底前实现基金省级统收统支的省级统筹，确保按时足额发放退休人员养老金。五是稳步推进社会保险费征收体制改革。企业职工基本养老保险和企业职工其他险种缴费，暂按现行征收体制继续征收，稳定缴费方式。机关事业单位社会保险费和城乡居民基本养老、基本医疗保险费征管职责如期划转。在征收体制改革过程中不得自行对企业历史欠费进行集中清缴，不得采取任何增加小微企业实际缴费负担的做法。六是建立健全工作协调机制。省政府建立由相关领导牵头，人力资源社会保障、财政、税务、医保等部门参加的工作协调机制，统筹协调降低社会保险费率和社会保险费征收体制改革工作。七是认真做好组织实施工作。《实施方案》实施到位后，预计2019年全年可减轻企业各项社保缴费负担超过400亿元。</p>
      <h2>三、《实施方案》提出将全省企业职工基本保险单位缴费比例降至16%，这项措施会有什么效果？</h2>
      <p>答：目前我省企业职工养老保险阶段性执行19%的单位费率，与周边省份相比是比较高的，不利于营造公平的市场竞争环境。本次降低企业职工养老保险单位缴费比例，将有以下几方面的积极效果：一是有利于大幅减轻企业社保缴费负担。单位缴费比例降至16%，相较原政策规定的20%的费率水平，一次性降低了4个百分点。而且这次调整不是阶段性政策，而是长期性制度安排，政策力度大，普惠性强，减负效果明显，预计2019年全年可以减少我省企业养老保险缴费负担229亿元，有助于进一步激发市场活力，促进稳就业，助推经济高质量发展。二是有利于建立公平竞争市场环境。此次降低企业职工养老保险单位费率，是全国统一政策，避免过去因为社会保险费率不一致对企业投资造成的影响，创造公平的市场竞争环境。此外，此次降费率是针对所有参保企业，不设门槛，各类用人单位特别是民营企业、小微企业都能从降费率政策中受益，有助于企业轻装上阵，实现更好发展。三是有利于促进养老保险制度的可持续发展。费率降低以后，企业参保的门槛降低了，不仅可以增强企业活力和发展后劲，也有利于提高企业和职工的参保积极性，能够将更多的职工纳入到养老保险制度体系中来，有助于扩大养老保险覆盖面，形成企业发展与养老保险制度发展的良性循环。四是有利于实现企业和职工同受益。目前国家和省实行“社会统筹加个人账户”的养老保险制度模式，其中养老保险单位缴费记入社会统筹部分，个人缴费记入个人账户部分，因此，此次降低养老保险单位费率不会影响参保人员的个人养老保险权益，特别是目前养老金计发主要与个人缴费工资水平和缴费年限挂钩，降低单位缴费比例不会影响到参保人员个人待遇计发，且根据国家统一部署，我省今年还要继续上调退休人员养老金，目前省人社厅正在会同省财政厅抓紧研究拟订我省退休人员养老金调整方案，这也是根据国家部署连续第15年提高企业退休人员基本养老金水平，今年总体提高比例为5％，预计将有770万左右企业退休人员受益。</p>
      <h2>四、《实施方案》对缴费基数政策也进行了调整，与之前政策相比有什么变化？</h2>
      <p>答：缴费基数也是影响企业和个人社保缴费负担的重要参数。目前我省社保缴费基数上下限确定的做法是：一是上限的确定，根据国发﹝1995﹞6号文件规定，按上年度城镇非私营单位在岗职工平均工资的300%确定缴费基数上限，并一直执行至今。二是下限的确定，考虑到城镇非私营单位在岗职工平均工资水平较高，基数较小，不能全面反映全社会就业人员的实际工资水平，为适当降低企业用工成本，并适当减轻低收入参保人员的缴费压力，根据国发〔2016〕56号文件精神，我省从2017年起改用全省城镇非私营单位在岗职工平均工资和全省城镇私营单位就业人员平均工资加权平均值的60%作为缴费基数下限，这也与国家最新要求是一致的。</p>
      <p>根据国家文件精神，我省《实施方案》统一了社会保险缴费基数上下限的确定口径，即：统一按全省上年度城镇非私营单位就业人员平均工资和城镇私营单位就业人员平均工资加权计算的全口径城镇单位就业人员平均工资，核定社会保险缴费基数上下限。这样有助于适当降低企业用工成本，并适当减轻低收入参保人员的缴费压力，避免对低收入群体的“制度性挤出”。这里需要说明两点：一是我省调整社保缴费基数口径政策从今年7月1日起执行，主要考虑是目前社保缴费基数是根据统计部门公布的上年职工平均工资来确定，而相关数据一般在每年的6月左右公布，且我省企业职工养老保险执行社保年度，即每年的7月1日至次年的6月30日，因此我省惯例是在每年6月底前发布年度社保缴费基数上下限，这样做有利于避免数据公布不及时导致的企业重复申报问题，切实减轻企业事务性负担。二是此次调整社保缴费基数口径不会影响到退休人员待遇计发。目前我省企业职工养老保险计发办法中，基础养老金的计算与全省城镇非私营单位在岗职工平均工资指标挂钩。国家明确调整就业人员平均工资计算口径后，将研究制定确保待遇平稳衔接的过渡办法，我省将根据国家统一部署，研究制定就业人员平均工资计算口径调整后的基本养老金计发办法过渡措施。新办法出台前，待遇计发参数暂时不变，确保退休人员养老保险待遇不受影响。</p>
      <h2>五、《实施方案》对灵活就业人员缴费基数政策也进行了规定，具体包括哪些内容？</h2>
      <p>答：一直以来，我省各地个体工商户及其雇工、灵活就业人员均可以在省规定的社保缴费基数上下限之间选择适当的缴费档次，此次，根据国家文件精神，《实施方案》明确个体工商户和灵活就业人员参加企业职工基本养老保险，可在全省全口径城镇单位就业人员平均工资的60%至300%之间选择适当的缴费基数，这也与国家最新要求和我省原有做法保持一致，参保人员可结合自身实际情况，选择适当的缴费基数，选择低基数的可以适当减轻缴费负担，收入较高的人员也可以选择较高的缴费基数，来提高自己退休后的养老金水平。</p>
      <h2>六、降低养老保险费率后，养老金按时足额发放是否会受到影响？</h2>
      <p>答：降低养老保险费率在切实减轻企业社保缴费负担的同时，确实会减少养老保险基金收入，加大基金收支压力，但从我省情况看，是不会影响到退休人员养老金的按时足额发放的。主要体现在以下几方面：一是我省养老保险基金运行情况良好。经过多年努力，当前养老保险基金收支情况良好，基金整体收大于支，累计结余不断增加，2018年末基金累计结余3945.76亿元，基金备付能力21.6个月，在全国居于前列，有较强的支撑能力，在未来一段时期内，不会出现基金支付风险，更不会影响到养老金按时足额发放。二是我省养老保险基金统筹共济能力持续增强。去年，为贯彻落实基金中央调剂制度，我省出台关于进一步完善省级统筹的意见，改革完善调剂补助方法，有力提升了基金全省统筹共济能力，特别是有力确保了省内基金困难地区退休人员养老金的按时足额发放。三是我省多措并举夯实制度运行基础。我省自2018年起明确将企业职工养老保险基金委托全国社保基金理事会投资运营，首批400亿元委托资金已经到位，有力促进基金的保值增值，下一步，我们将根据国务院统一部署，积极落实划转部分国有资本充实社保基金工作，同时探索建立省级社保战略储备基金，专门用于人口老龄化高峰时全省养老保险等社会保障支出的补充、调剂。</p>
      <h2>七、《实施方案》提出延长阶段性降低失业保险和工伤保险费率期限，是如何考虑的？</h2>
      <p>答：失业保险方面，我省从2013年8月1日起将失业保险费率分三次由3%降至1%，其中单位缴费比例由2%降至0.5%，个人缴费比例由1%降至0.5%。2018年末全省失业保险基金累计结余387.14亿元，基金备付能力49.8个月。按照国务院文件要求，我省《实施方案》明确阶段性降低失业保险费率政策到期后，继续延长执行一年到2020年4月30日。</p>
      <p>工伤保险方面，近年来，我省工伤保险费率政策有两次较大的调整：一是2015年根据国家部署要求，将行业工伤风险类别从原有的三个档次细化为八个档次，并细化了工伤保险费率调整政策，调整后，全省工伤保险平均费率从1.2%下调到0.9%。二是根据国家部署要求，自2018年5月1日起对基金结余过多的地区，开展阶段性降低费率行动。政策实施后，全省有15个统筹地区工伤保险费率下调20%，35个统筹地区下调50%。调整后全省工伤保险平均费率下降约0.2个百分点，从0.9%降至0.7%。据统计，2018年为企业减负18.64亿元。2018年末全省工伤保险基金累计结余148.79亿元，基金备付能力27.2个月。按照国务院文件要求，我省《实施方案》明确继续执行阶段性降低工伤保险费率政策一年到2020年4月30日。</p>
      <h2>八、我省将采取哪些措施来保障《实施方案》的顺利实施？</h2>
      <p>答：为保障参保单位和职工应享尽享降费红利，确保《实施方案》各项部署落地见效，将采取以下措施：一是指导各地认真做好《实施方案》的组织实施工作，坚决兑现对企业和社会的承诺。加强部门协调配合，形成工作合力，确保降费率、调基数、转职能等相关工作扎实有序推进。优化经办服务，运用“互联网+”新模式，推进业务上网、服务下沉，提高办事服务效能，方便企业就近就便、及时足额享受优惠政策。二是建立定期调度机制，及时跟踪各地政策实施情况和实施效果，让市场主体特别是小微企业有明显降费感受，不断增强参保单位和职工的政策获得感。三是开展政策总结评估，适时对政策实施效果开展全面评估，及时研究解决工作推进中遇到的新情况新问题，查缺补漏，努力达到政策实施的最优效果。四是强化监测预警，对基金运行情况做好后续跟踪，既要减轻企业缴费负担，又要保障职工社保待遇不变、养老金合理增长并按时足额发放，使社保基金可持续、企业与职工同受益。</p>
      <p>江苏省人力资源和社会保障厅</p>
      <p>2019年5月9日</p>
    `
  },
  {
    id: 5,
    title: '深圳市人民政府办公厅关于印发深圳市降低社会保险费率实施方案的通知',
    abstract: '深圳市根据《国务院办公厅关于印发降低社会保险费率综合方案的通知》和《广东省人力资源和社会保障厅 广东省财政厅 国家税务总局广东省税务局关于印发广东省城镇职工基本养老保险单位缴费比例过渡方案的通知》，结合深圳市实际情况，引发社会保险费率实施方案。',
    date: '2019年5月14日',
    keywords: '深圳、社会保险、失业保险、养老保险',
    content: `
      <p>根据《国务院办公厅关于印发降低社会保险费率综合方案的通知》（国办发〔2019〕13号）和《广东省人力资源和社会保障厅 广东省财政厅 国家税务总局广东省税务局关于印发广东省城镇职工基本养老保险单位缴费比例过渡方案的通知》（粤人社规〔2019〕11号），结合我市实际，制定本实施方案。</p>
      <p>一、降低机关事业单位基本养老保险单位缴费比例自2019年5月1日起，我市机关事业单位基本养老保险单位缴费比例由20%统一下调为16%。</p>
      <p>二、逐步调整企业职工基本养老保险单位缴费比例适时修订《深圳经济特区社会养老保险条例》，将我市企业职工基本养老保险单位缴费比例逐步调整至16%。</p>
      <p>三、调整缴费基数上下限自2019年5月1日起，我市机关事业单位基本养老保险和企业职工基本养老保险缴费基数上限调整为上年度全省全口径</p>
      <p>城镇单位就业人员月平均工资的300%；机关事业单位基本养老保险缴费基数下限调整为上年度全省全口径城镇单位就业人员月平均工资的60%。</p>
      <p>适时修订《深圳经济特区社会养老保险条例》，调整我市企业职工基本养老保险单位缴费基数下限。上述执行时间均为养老保险费对应的费款所属期。</p>
      <p>四、继续阶段性降低失业保险、工伤保险费率2019年5月1日起至2020年12月31日，我市失业保险费总费率继续维持1%，其中用人单位缴费费率为0.7%；工伤保险在执行八类工伤保险行业基准费率和浮动费率政策的基础上，各参保单位现行缴费费率继续维持阶段性下调30%的规定。</p>
      <p>五、稳步推进社保费征收机制改革机关事业单位社保费和城乡居民社保费征管职责如期划转。继续推进信息共享平台建设等各项工作，切实加强信息共享，确保征收工作有序衔接。合理调整我市2019年社保基金收入预算。</p>
    `
  },
]

let communitys = [
  {
    id: 1, 
    title: ' 霖珑HR/人力资源垂直社群', 
    messages: ['汇聚数十万HR从业者', '分享对HR有价值的资讯、信息、活动'], 
    tips: '扫码加微信专属客服',
    qrcode: 'https://static.weibangong.com/files/5d22f475af4cfc5f2bec44a6-big'
  },
  {
    id: 2, 
    title: '霖珑局/HRD/CHO/CEO高端社群', 
    messages: ['共同探索人力资源前沿动态','分享最佳实践 推动行业变革'], 
    tips: '扫码加微信专属客服',
    qrcode: 'https://static.weibangong.com/files/5d22f475af4cfc5f2bec44a6-big'
  }
]
 
export default [{
    url: '/mock/wck/website/industrys_details',
    type: 'post',
    response: config => {
      let id = config.body.id;
      let details = industrys_details.filter((item) => item.id == id);
      if(details && details.length > 0){
        details = details[0]
      }else {
        details = null;
      }
      return {
        code: 200,
        details: details,
        success: 'success'
      }
    }
  },
  {
    url: '/mock/wck/website/industrys',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: industrys,
        success: 'success'
      }
    }
  },
  {
    url: '/mock/wck/website/communitys',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: communitys,
        success: 'success'
      }
    }
  },
  
]