const mockData = [
  {
    date: "7/14/2022",
    amount: 8864.5,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
    receipt: true,
  },
  {
    date: "5/23/2023",
    amount: 9065.23,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
    receipt: false,
  },
  {
    date: "10/6/2022",
    amount: 7005.06,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum",
    receipt: true,
  },
  {
    date: "10/11/2022",
    amount: 9751.77,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
    receipt: true,
  },
  {
    date: "5/22/2023",
    amount: 3259.64,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
    receipt: true,
  },
  {
    date: "9/25/2022",
    amount: 6982.41,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non",
    receipt: false,
  },
  {
    date: "1/16/2023",
    amount: 5949.5,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
    receipt: false,
  },
  {
    date: "2/8/2023",
    amount: 3942.26,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
    receipt: false,
  },
  {
    date: "9/9/2022",
    amount: 9111.82,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
    receipt: true,
  },
  {
    date: "8/22/2022",
    amount: 1844.57,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
    receipt: true,
  },
  {
    date: "5/6/2023",
    amount: 7127.38,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
    receipt: false,
  },
  {
    date: "2/3/2023",
    amount: 3114.32,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
    receipt: true,
  },
  {
    date: "2/3/2023",
    amount: 4501.72,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
    receipt: true,
  },
  {
    date: "4/9/2023",
    amount: 1573.22,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
    receipt: true,
  },
  {
    date: "6/7/2023",
    amount: 5430.79,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla",
    receipt: false,
  },
  {
    date: "5/12/2023",
    amount: 1497.2,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
    receipt: false,
  },
  {
    date: "7/17/2022",
    amount: 9280.28,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras",
    receipt: true,
  },
  {
    date: "10/8/2022",
    amount: 4105.79,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
    receipt: true,
  },
  {
    date: "11/22/2022",
    amount: 4300.44,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
    receipt: false,
  },
  {
    date: "8/5/2022",
    amount: 5641.06,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
    receipt: true,
  },
  {
    date: "3/7/2023",
    amount: 1376.38,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
    receipt: false,
  },
  {
    date: "4/28/2023",
    amount: 9975.94,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
    receipt: false,
  },
  {
    date: "10/25/2022",
    amount: 102.35,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
    receipt: true,
  },
  {
    date: "4/18/2023",
    amount: 5057.26,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
    receipt: true,
  },
  {
    date: "7/10/2023",
    amount: 2732.89,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
    receipt: false,
  },
  {
    date: "7/11/2023",
    amount: 341.33,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
    receipt: true,
  },
  {
    date: "3/23/2023",
    amount: 6978.94,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
    receipt: true,
  },
  {
    date: "2/23/2023",
    amount: 349.7,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
    receipt: false,
  },
  {
    date: "4/7/2023",
    amount: 1250.17,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
    receipt: false,
  },
  {
    date: "6/17/2023",
    amount: 3325.67,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
    receipt: false,
  },
  {
    date: "8/9/2022",
    amount: 9414.21,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
    receipt: true,
  },
  {
    date: "5/15/2023",
    amount: 1101.85,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
    receipt: true,
  },
  {
    date: "1/22/2023",
    amount: 7225.03,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
    receipt: false,
  },
  {
    date: "5/5/2023",
    amount: 2443.78,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in",
    receipt: true,
  },
  {
    date: "8/27/2022",
    amount: 8078.66,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
    receipt: false,
  },
  {
    date: "7/15/2022",
    amount: 1759.98,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
    receipt: true,
  },
  {
    date: "4/29/2023",
    amount: 2255.38,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum",
    receipt: true,
  },
  {
    date: "9/19/2022",
    amount: 8058.42,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
    receipt: false,
  },
  {
    date: "2/15/2023",
    amount: 9883.92,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
    receipt: true,
  },
  {
    date: "6/29/2023",
    amount: 5668.11,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
    receipt: false,
  },
  {
    date: "4/20/2023",
    amount: 934.55,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "donec semper sapien a libero nam dui proin leo odio porttitor id consequat",
    receipt: true,
  },
  {
    date: "11/16/2022",
    amount: 1773.02,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
    receipt: false,
  },
  {
    date: "6/16/2023",
    amount: 9444.06,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
    receipt: false,
  },
  {
    date: "1/21/2023",
    amount: 1392.47,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
    receipt: false,
  },
  {
    date: "3/28/2023",
    amount: 7478.92,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
    receipt: false,
  },
  {
    date: "6/24/2023",
    amount: 784.87,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
    receipt: false,
  },
  {
    date: "5/6/2023",
    amount: 5372.22,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
    receipt: false,
  },
  {
    date: "7/26/2022",
    amount: 5611.12,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non",
    receipt: true,
  },
  {
    date: "10/12/2022",
    amount: 4285.49,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
    receipt: true,
  },
  {
    date: "1/31/2023",
    amount: 6583.91,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",
    receipt: false,
  },
  {
    date: "11/30/2022",
    amount: 9492.55,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
    receipt: true,
  },
  {
    date: "11/20/2022",
    amount: 2439.08,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
    receipt: false,
  },
  {
    date: "10/15/2022",
    amount: 7511.78,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
    receipt: false,
  },
  {
    date: "6/15/2023",
    amount: 8521.25,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat",
    receipt: false,
  },
  {
    date: "11/14/2022",
    amount: 7328.3,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
    receipt: true,
  },
  {
    date: "8/2/2022",
    amount: 6171.02,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
    receipt: false,
  },
  {
    date: "11/7/2022",
    amount: 8562.27,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
    receipt: true,
  },
  {
    date: "7/1/2023",
    amount: 3038.36,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed",
    receipt: true,
  },
  {
    date: "1/2/2023",
    amount: 3815.95,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
    receipt: true,
  },
  {
    date: "5/14/2023",
    amount: 4557.2,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed",
    receipt: true,
  },
  {
    date: "9/11/2022",
    amount: 5187.46,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    receipt: true,
  },
  {
    date: "4/4/2023",
    amount: 6662.9,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in",
    receipt: false,
  },
  {
    date: "11/21/2022",
    amount: 5110.7,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description: "pede justo eu massa donec dapibus duis at velit eu est",
    receipt: true,
  },
  {
    date: "9/19/2022",
    amount: 708.23,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum",
    receipt: true,
  },
  {
    date: "8/7/2022",
    amount: 6598.93,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
    receipt: false,
  },
  {
    date: "6/27/2023",
    amount: 118.51,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
    receipt: true,
  },
  {
    date: "10/2/2022",
    amount: 9901.78,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis",
    receipt: false,
  },
  {
    date: "3/21/2023",
    amount: 4358.79,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    receipt: true,
  },
  {
    date: "5/4/2023",
    amount: 8611.0,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
    receipt: false,
  },
  {
    date: "1/20/2023",
    amount: 7099.03,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu",
    receipt: false,
  },
  {
    date: "8/8/2022",
    amount: 3298.08,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit",
    receipt: true,
  },
  {
    date: "5/17/2023",
    amount: 6291.91,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
    receipt: true,
  },
  {
    date: "6/26/2023",
    amount: 1093.44,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    receipt: true,
  },
  {
    date: "12/14/2022",
    amount: 947.4,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
    receipt: true,
  },
  {
    date: "6/4/2023",
    amount: 6037.07,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
    receipt: false,
  },
  {
    date: "1/13/2023",
    amount: 9030.44,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
    receipt: true,
  },
  {
    date: "12/24/2022",
    amount: 3464.35,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non",
    receipt: false,
  },
  {
    date: "2/15/2023",
    amount: 2315.97,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
    receipt: false,
  },
  {
    date: "10/28/2022",
    amount: 5306.0,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
    receipt: true,
  },
  {
    date: "2/8/2023",
    amount: 868.25,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
    receipt: false,
  },
  {
    date: "11/24/2022",
    amount: 5249.15,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra",
    receipt: true,
  },
  {
    date: "7/22/2022",
    amount: 154.56,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
    receipt: true,
  },
  {
    date: "8/3/2022",
    amount: 6466.28,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
    receipt: false,
  },
  {
    date: "9/20/2022",
    amount: 5266.64,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
    receipt: false,
  },
  {
    date: "12/6/2022",
    amount: 3161.74,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer",
    receipt: false,
  },
  {
    date: "6/19/2023",
    amount: 9672.6,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
    receipt: false,
  },
  {
    date: "2/12/2023",
    amount: 1275.84,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
    receipt: true,
  },
  {
    date: "5/13/2023",
    amount: 4077.54,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
    receipt: false,
  },
  {
    date: "6/24/2023",
    amount: 6293.63,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
    receipt: false,
  },
  {
    date: "7/15/2022",
    amount: 7209.41,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
    receipt: true,
  },
  {
    date: "4/27/2023",
    amount: 8514.87,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
    receipt: false,
  },
  {
    date: "11/29/2022",
    amount: 2454.72,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
    receipt: true,
  },
  {
    date: "11/19/2022",
    amount: 5116.47,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien",
    receipt: false,
  },
  {
    date: "2/4/2023",
    amount: 2805.52,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
    receipt: true,
  },
  {
    date: "5/1/2023",
    amount: 9744.46,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
    receipt: true,
  },
  {
    date: "2/13/2023",
    amount: 6211.76,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
    receipt: true,
  },
  {
    date: "2/7/2023",
    amount: 9877.39,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
    receipt: true,
  },
  {
    date: "7/3/2023",
    amount: 7569.59,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    receipt: true,
  },
  {
    date: "6/28/2023",
    amount: 546.62,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
    receipt: true,
  },
  {
    date: "2/13/2023",
    amount: 6134.46,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
    receipt: true,
  },
  {
    date: "8/27/2022",
    amount: 4331.21,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
    receipt: false,
  },
  {
    date: "3/4/2023",
    amount: 9058.31,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at",
    receipt: true,
  },
  {
    date: "10/6/2022",
    amount: 683.95,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
    receipt: true,
  },
  {
    date: "5/2/2023",
    amount: 6405.28,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
    receipt: true,
  },
  {
    date: "6/25/2023",
    amount: 316.6,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
    receipt: true,
  },
  {
    date: "9/29/2022",
    amount: 1115.24,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
    receipt: false,
  },
  {
    date: "1/6/2023",
    amount: 8346.73,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
    receipt: true,
  },
  {
    date: "9/17/2022",
    amount: 8174.48,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non",
    receipt: false,
  },
  {
    date: "11/6/2022",
    amount: 7230.17,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
    receipt: true,
  },
  {
    date: "3/1/2023",
    amount: 6178.52,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor",
    receipt: false,
  },
  {
    date: "8/23/2022",
    amount: 9967.82,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
    receipt: true,
  },
  {
    date: "7/17/2022",
    amount: 5945.16,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",
    receipt: true,
  },
  {
    date: "4/30/2023",
    amount: 3365.31,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
    receipt: true,
  },
  {
    date: "3/15/2023",
    amount: 9399.76,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
    receipt: false,
  },
  {
    date: "1/5/2023",
    amount: 9173.37,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
    receipt: true,
  },
  {
    date: "9/12/2022",
    amount: 5238.09,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
    receipt: true,
  },
  {
    date: "12/29/2022",
    amount: 2912.51,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
    receipt: false,
  },
  {
    date: "4/24/2023",
    amount: 2533.29,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
    receipt: false,
  },
  {
    date: "11/2/2022",
    amount: 1709.46,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
    receipt: true,
  },
  {
    date: "1/3/2023",
    amount: 1620.58,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit",
    receipt: false,
  },
  {
    date: "10/26/2022",
    amount: 2516.14,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "pede ac diam cras pellentesque volutpat dui maecenas tristique est",
    receipt: false,
  },
  {
    date: "6/26/2023",
    amount: 4559.72,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
    receipt: false,
  },
  {
    date: "8/22/2022",
    amount: 8254.37,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
    receipt: true,
  },
  {
    date: "9/12/2022",
    amount: 1684.91,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    receipt: false,
  },
  {
    date: "8/25/2022",
    amount: 1305.57,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
    receipt: false,
  },
  {
    date: "6/2/2023",
    amount: 1889.68,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
    receipt: false,
  },
  {
    date: "2/24/2023",
    amount: 7081.96,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
    receipt: true,
  },
  {
    date: "11/23/2022",
    amount: 1539.97,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
    receipt: false,
  },
  {
    date: "8/18/2022",
    amount: 3215.07,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
    receipt: false,
  },
  {
    date: "4/29/2023",
    amount: 3148.62,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim",
    receipt: true,
  },
  {
    date: "3/17/2023",
    amount: 4665.09,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
    receipt: false,
  },
  {
    date: "12/29/2022",
    amount: 3661.02,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
    receipt: true,
  },
  {
    date: "10/25/2022",
    amount: 3474.59,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus",
    receipt: false,
  },
  {
    date: "3/10/2023",
    amount: 5320.62,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
    receipt: true,
  },
  {
    date: "1/10/2023",
    amount: 7718.68,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    receipt: false,
  },
  {
    date: "10/8/2022",
    amount: 2272.72,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
    receipt: true,
  },
  {
    date: "3/22/2023",
    amount: 9394.05,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
    receipt: false,
  },
  {
    date: "6/25/2023",
    amount: 9243.69,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
    receipt: false,
  },
  {
    date: "8/14/2022",
    amount: 5069.19,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
    receipt: false,
  },
  {
    date: "3/18/2023",
    amount: 6718.12,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
    receipt: true,
  },
  {
    date: "1/5/2023",
    amount: 4821.48,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
    receipt: false,
  },
  {
    date: "6/19/2023",
    amount: 166.13,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis",
    receipt: true,
  },
  {
    date: "1/29/2023",
    amount: 7170.75,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis",
    receipt: true,
  },
  {
    date: "10/3/2022",
    amount: 8550.54,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
    receipt: true,
  },
  {
    date: "1/20/2023",
    amount: 6561.39,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
    receipt: true,
  },
  {
    date: "10/2/2022",
    amount: 7022.96,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
    receipt: true,
  },
  {
    date: "8/10/2022",
    amount: 9657.51,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
    receipt: true,
  },
  {
    date: "12/22/2022",
    amount: 323.09,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor",
    receipt: true,
  },
  {
    date: "8/8/2022",
    amount: 2442.88,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
    receipt: true,
  },
  {
    date: "2/15/2023",
    amount: 7075.48,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
    receipt: false,
  },
  {
    date: "1/30/2023",
    amount: 5501.92,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "convallis duis consequat dui nec nisi volutpat eleifend donec ut",
    receipt: false,
  },
  {
    date: "8/11/2022",
    amount: 5499.79,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "lacinia sapien quis libero nullam sit amet turpis elementum ligula",
    receipt: true,
  },
  {
    date: "6/14/2023",
    amount: 7552.37,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
    receipt: false,
  },
  {
    date: "5/1/2023",
    amount: 2169.36,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    receipt: true,
  },
  {
    date: "11/23/2022",
    amount: 5362.05,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
    receipt: false,
  },
  {
    date: "5/30/2023",
    amount: 1086.17,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description: "dui vel nisl duis ac nibh fusce lacus purus aliquet at",
    receipt: true,
  },
  {
    date: "1/22/2023",
    amount: 7437.56,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in",
    receipt: false,
  },
  {
    date: "10/14/2022",
    amount: 4049.8,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
    receipt: true,
  },
  {
    date: "9/9/2022",
    amount: 4641.16,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
    receipt: true,
  },
  {
    date: "12/9/2022",
    amount: 8791.94,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
    receipt: false,
  },
  {
    date: "9/23/2022",
    amount: 386.73,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
    receipt: false,
  },
  {
    date: "12/1/2022",
    amount: 7785.42,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non",
    receipt: false,
  },
  {
    date: "4/19/2023",
    amount: 7010.6,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
    receipt: true,
  },
  {
    date: "1/8/2023",
    amount: 9916.1,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna",
    receipt: false,
  },
  {
    date: "10/3/2022",
    amount: 9940.55,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
    receipt: true,
  },
  {
    date: "8/24/2022",
    amount: 8024.33,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
    receipt: false,
  },
  {
    date: "11/27/2022",
    amount: 3100.49,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
    receipt: false,
  },
  {
    date: "10/24/2022",
    amount: 1652.44,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
    receipt: false,
  },
  {
    date: "8/27/2022",
    amount: 316.79,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
    receipt: false,
  },
  {
    date: "6/27/2023",
    amount: 1728.24,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
    receipt: false,
  },
  {
    date: "10/12/2022",
    amount: 784.5,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
    receipt: false,
  },
  {
    date: "4/16/2023",
    amount: 6921.8,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum",
    receipt: false,
  },
  {
    date: "4/2/2023",
    amount: 5497.98,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
    receipt: true,
  },
  {
    date: "3/5/2023",
    amount: 5740.56,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio",
    receipt: false,
  },
  {
    date: "11/14/2022",
    amount: 4381.58,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
    receipt: false,
  },
  {
    date: "4/9/2023",
    amount: 7276.96,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
    receipt: true,
  },
  {
    date: "1/31/2023",
    amount: 3050.91,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
    receipt: true,
  },
  {
    date: "11/1/2022",
    amount: 9275.75,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non",
    receipt: false,
  },
  {
    date: "1/29/2023",
    amount: 5870.25,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
    receipt: true,
  },
  {
    date: "6/1/2023",
    amount: 8292.42,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
    receipt: false,
  },
  {
    date: "5/18/2023",
    amount: 8283.0,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "sed interdum venenatis turpis enim blandit mi in porttitor pede",
    receipt: false,
  },
  {
    date: "8/5/2022",
    amount: 9121.62,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
    receipt: false,
  },
  {
    date: "8/7/2022",
    amount: 9222.6,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh",
    receipt: false,
  },
  {
    date: "9/11/2022",
    amount: 1633.97,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
    receipt: false,
  },
  {
    date: "9/3/2022",
    amount: 7456.24,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "accumsan felis ut at dolor quis odio consequat varius integer ac",
    receipt: true,
  },
  {
    date: "1/14/2023",
    amount: 1445.44,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
    receipt: false,
  },
  {
    date: "3/17/2023",
    amount: 6766.59,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede",
    receipt: false,
  },
  {
    date: "2/24/2023",
    amount: 8671.42,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
    receipt: false,
  },
  {
    date: "11/10/2022",
    amount: 8629.13,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem",
    receipt: true,
  },
  {
    date: "2/6/2023",
    amount: 246.31,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
    receipt: true,
  },
  {
    date: "5/21/2023",
    amount: 8489.55,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus",
    receipt: false,
  },
  {
    date: "3/18/2023",
    amount: 2449.9,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
    receipt: true,
  },
  {
    date: "12/26/2022",
    amount: 6996.08,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
    receipt: true,
  },
  {
    date: "5/11/2023",
    amount: 7926.63,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
    receipt: true,
  },
  {
    date: "5/17/2023",
    amount: 3145.01,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
    receipt: true,
  },
  {
    date: "10/7/2022",
    amount: 5040.02,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
    receipt: false,
  },
  {
    date: "5/29/2023",
    amount: 7142.83,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius",
    receipt: false,
  },
  {
    date: "11/8/2022",
    amount: 6316.46,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
    receipt: false,
  },
  {
    date: "1/10/2023",
    amount: 2175.72,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description: "morbi odio odio elementum eu interdum eu tincidunt in leo",
    receipt: false,
  },
  {
    date: "1/12/2023",
    amount: 4817.45,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
    receipt: true,
  },
  {
    date: "2/14/2023",
    amount: 7790.18,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
    receipt: false,
  },
  {
    date: "7/9/2023",
    amount: 1630.34,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
    receipt: true,
  },
  {
    date: "4/22/2023",
    amount: 9338.9,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    receipt: false,
  },
  {
    date: "5/19/2023",
    amount: 7402.28,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
    receipt: false,
  },
  {
    date: "1/16/2023",
    amount: 5005.1,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
    receipt: false,
  },
  {
    date: "11/18/2022",
    amount: 3714.88,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
    receipt: false,
  },
  {
    date: "6/12/2023",
    amount: 2510.99,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat",
    receipt: false,
  },
  {
    date: "11/14/2022",
    amount: 9694.35,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
    receipt: true,
  },
  {
    date: "2/18/2023",
    amount: 1356.95,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",
    receipt: true,
  },
  {
    date: "7/21/2022",
    amount: 2864.62,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
    receipt: true,
  },
  {
    date: "3/8/2023",
    amount: 5239.09,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
    receipt: true,
  },
  {
    date: "5/10/2023",
    amount: 7869.55,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
    receipt: false,
  },
  {
    date: "7/18/2022",
    amount: 1298.95,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
    receipt: true,
  },
  {
    date: "4/11/2023",
    amount: 5596.94,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est",
    receipt: false,
  },
  {
    date: "1/29/2023",
    amount: 1741.31,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
    receipt: false,
  },
  {
    date: "2/12/2023",
    amount: 5725.03,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
    receipt: false,
  },
  {
    date: "6/23/2023",
    amount: 5989.11,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
    receipt: false,
  },
  {
    date: "1/18/2023",
    amount: 506.0,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
    receipt: true,
  },
  {
    date: "12/2/2022",
    amount: 3006.17,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
    receipt: false,
  },
  {
    date: "5/18/2023",
    amount: 9794.56,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
    receipt: true,
  },
  {
    date: "1/18/2023",
    amount: 259.71,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
    receipt: false,
  },
  {
    date: "12/16/2022",
    amount: 9649.06,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
    receipt: false,
  },
  {
    date: "5/17/2023",
    amount: 9727.24,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "curabitur in libero ut massa volutpat convallis morbi odio odio",
    receipt: false,
  },
  {
    date: "3/28/2023",
    amount: 563.93,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
    receipt: true,
  },
  {
    date: "3/23/2023",
    amount: 1790.04,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem",
    receipt: true,
  },
  {
    date: "8/22/2022",
    amount: 8381.2,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
    receipt: false,
  },
  {
    date: "10/19/2022",
    amount: 9851.04,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "tristique est et tempus semper est quam pharetra magna ac consequat metus",
    receipt: true,
  },
  {
    date: "2/4/2023",
    amount: 5242.47,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
    receipt: false,
  },
  {
    date: "12/10/2022",
    amount: 3299.72,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
    receipt: true,
  },
  {
    date: "2/24/2023",
    amount: 8238.93,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
    receipt: true,
  },
  {
    date: "11/3/2022",
    amount: 5215.24,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
    receipt: false,
  },
  {
    date: "8/4/2022",
    amount: 4255.48,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
    receipt: false,
  },
  {
    date: "2/25/2023",
    amount: 3633.81,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh",
    receipt: false,
  },
  {
    date: "7/17/2022",
    amount: 385.61,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
    receipt: false,
  },
  {
    date: "7/16/2022",
    amount: 8642.34,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
    receipt: false,
  },
  {
    date: "4/22/2023",
    amount: 2690.36,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor",
    receipt: false,
  },
  {
    date: "2/28/2023",
    amount: 2655.68,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description: "sit amet erat nulla tempus vivamus in felis eu sapien cursus",
    receipt: false,
  },
  {
    date: "4/10/2023",
    amount: 7512.67,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
    receipt: true,
  },
  {
    date: "2/22/2023",
    amount: 3835.74,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in",
    receipt: false,
  },
  {
    date: "5/6/2023",
    amount: 9946.11,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
    receipt: true,
  },
  {
    date: "4/10/2023",
    amount: 4780.18,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
    receipt: true,
  },
  {
    date: "1/4/2023",
    amount: 8617.24,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "vestibulum sed magna at nunc commodo placerat praesent blandit nam",
    receipt: false,
  },
  {
    date: "11/3/2022",
    amount: 9038.57,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
    receipt: true,
  },
  {
    date: "10/14/2022",
    amount: 2857.02,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus",
    receipt: false,
  },
  {
    date: "1/13/2023",
    amount: 6025.91,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description: "ut odio cras mi pede malesuada in imperdiet et commodo",
    receipt: true,
  },
  {
    date: "3/8/2023",
    amount: 6051.99,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
    receipt: true,
  },
  {
    date: "9/23/2022",
    amount: 5750.66,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
    receipt: false,
  },
  {
    date: "7/5/2023",
    amount: 7355.56,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",
    receipt: false,
  },
  {
    date: "1/15/2023",
    amount: 4195.8,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
    receipt: false,
  },
  {
    date: "10/13/2022",
    amount: 95.2,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    receipt: true,
  },
  {
    date: "11/16/2022",
    amount: 1246.6,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description: "mi integer ac neque duis bibendum morbi non quam nec",
    receipt: false,
  },
  {
    date: "8/25/2022",
    amount: 4189.44,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
    receipt: false,
  },
  {
    date: "8/18/2022",
    amount: 7492.63,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "pellentesque at nulla suspendisse potenti cras in purus eu magna",
    receipt: false,
  },
  {
    date: "4/4/2023",
    amount: 9094.39,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
    receipt: false,
  },
  {
    date: "2/16/2023",
    amount: 7670.44,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
    receipt: true,
  },
  {
    date: "7/27/2022",
    amount: 9887.01,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras",
    receipt: false,
  },
  {
    date: "5/1/2023",
    amount: 5159.06,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
    receipt: false,
  },
  {
    date: "11/23/2022",
    amount: 5706.78,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    receipt: false,
  },
  {
    date: "1/29/2023",
    amount: 6176.43,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
    receipt: true,
  },
  {
    date: "6/10/2023",
    amount: 3876.84,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
    receipt: false,
  },
  {
    date: "6/19/2023",
    amount: 6745.75,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
    receipt: true,
  },
  {
    date: "1/18/2023",
    amount: 2908.97,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description: "lacinia aenean sit amet justo morbi ut odio cras mi",
    receipt: false,
  },
  {
    date: "9/19/2022",
    amount: 9947.16,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
    receipt: true,
  },
  {
    date: "3/23/2023",
    amount: 869.38,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
    receipt: true,
  },
  {
    date: "5/17/2023",
    amount: 2970.61,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "felis donec semper sapien a libero nam dui proin leo odio porttitor",
    receipt: true,
  },
  {
    date: "10/15/2022",
    amount: 3208.24,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
    receipt: false,
  },
  {
    date: "1/17/2023",
    amount: 4770.54,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
    receipt: false,
  },
  {
    date: "9/5/2022",
    amount: 5034.0,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
    receipt: false,
  },
  {
    date: "10/29/2022",
    amount: 3038.51,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
    receipt: true,
  },
  {
    date: "1/15/2023",
    amount: 147.15,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "eu magna vulputate luctus cum sociis natoque penatibus et magnis",
    receipt: true,
  },
  {
    date: "11/25/2022",
    amount: 5440.49,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
    receipt: true,
  },
  {
    date: "4/30/2023",
    amount: 7335.82,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
    receipt: true,
  },
  {
    date: "5/8/2023",
    amount: 2600.25,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
    receipt: false,
  },
  {
    date: "3/26/2023",
    amount: 5622.22,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "magna vulputate luctus cum sociis natoque penatibus et magnis dis",
    receipt: false,
  },
  {
    date: "10/17/2022",
    amount: 4410.64,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
    receipt: false,
  },
  {
    date: "7/10/2023",
    amount: 7155.16,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
    receipt: true,
  },
  {
    date: "9/13/2022",
    amount: 6207.06,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
    receipt: true,
  },
  {
    date: "3/9/2023",
    amount: 1269.93,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
    receipt: false,
  },
  {
    date: "1/16/2023",
    amount: 5186.25,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat",
    receipt: false,
  },
  {
    date: "7/11/2023",
    amount: 1186.8,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
    receipt: false,
  },
  {
    date: "3/27/2023",
    amount: 4420.25,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
    receipt: true,
  },
  {
    date: "8/21/2022",
    amount: 7365.79,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
    receipt: false,
  },
  {
    date: "3/31/2023",
    amount: 7973.71,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    receipt: true,
  },
  {
    date: "8/18/2022",
    amount: 9337.83,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
    receipt: true,
  },
  {
    date: "6/8/2023",
    amount: 8784.48,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
    receipt: true,
  },
  {
    date: "7/28/2022",
    amount: 9673.79,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
    receipt: false,
  },
  {
    date: "1/25/2023",
    amount: 3562.88,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
    receipt: true,
  },
  {
    date: "7/18/2022",
    amount: 2602.72,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
    receipt: false,
  },
  {
    date: "9/28/2022",
    amount: 693.97,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
    receipt: false,
  },
  {
    date: "5/18/2023",
    amount: 4640.46,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
    receipt: false,
  },
  {
    date: "10/15/2022",
    amount: 5882.51,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
    receipt: true,
  },
  {
    date: "3/15/2023",
    amount: 1177.7,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    receipt: true,
  },
  {
    date: "2/7/2023",
    amount: 5720.78,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque",
    receipt: false,
  },
  {
    date: "12/10/2022",
    amount: 8036.3,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
    receipt: true,
  },
  {
    date: "6/3/2023",
    amount: 8743.52,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
    receipt: true,
  },
  {
    date: "3/30/2023",
    amount: 3803.72,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    receipt: true,
  },
  {
    date: "5/27/2023",
    amount: 9380.87,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis",
    receipt: true,
  },
  {
    date: "4/21/2023",
    amount: 3605.13,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
    receipt: true,
  },
  {
    date: "11/8/2022",
    amount: 3771.57,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
    receipt: false,
  },
  {
    date: "3/24/2023",
    amount: 172.75,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
    receipt: false,
  },
  {
    date: "8/16/2022",
    amount: 2376.23,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
    receipt: false,
  },
  {
    date: "9/16/2022",
    amount: 6260.82,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
    receipt: false,
  },
  {
    date: "10/13/2022",
    amount: 3756.64,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
    receipt: false,
  },
  {
    date: "8/20/2022",
    amount: 8959.63,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut",
    receipt: false,
  },
  {
    date: "8/19/2022",
    amount: 7701.18,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis",
    receipt: false,
  },
  {
    date: "9/22/2022",
    amount: 787.16,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
    receipt: false,
  },
  {
    date: "11/17/2022",
    amount: 6885.8,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description: "in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
    receipt: true,
  },
  {
    date: "6/13/2023",
    amount: 2884.18,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
    receipt: true,
  },
  {
    date: "3/14/2023",
    amount: 7791.05,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
    receipt: false,
  },
  {
    date: "4/9/2023",
    amount: 8682.6,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
    receipt: true,
  },
  {
    date: "6/28/2023",
    amount: 2755.06,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
    receipt: false,
  },
  {
    date: "7/26/2022",
    amount: 1487.81,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa",
    receipt: false,
  },
  {
    date: "7/26/2022",
    amount: 4138.9,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
    receipt: false,
  },
  {
    date: "8/17/2022",
    amount: 3526.79,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
    receipt: false,
  },
  {
    date: "11/13/2022",
    amount: 5075.99,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "libero ut massa volutpat convallis morbi odio odio elementum eu",
    receipt: true,
  },
  {
    date: "9/30/2022",
    amount: 23.62,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
    receipt: false,
  },
  {
    date: "1/30/2023",
    amount: 2167.81,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum",
    receipt: false,
  },
  {
    date: "1/12/2023",
    amount: 3316.05,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    receipt: true,
  },
  {
    date: "12/25/2022",
    amount: 1026.8,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
    receipt: true,
  },
  {
    date: "12/7/2022",
    amount: 3191.05,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut",
    receipt: true,
  },
  {
    date: "7/29/2022",
    amount: 6102.86,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus",
    receipt: false,
  },
  {
    date: "3/23/2023",
    amount: 9257.01,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "mi in porttitor pede justo eu massa donec dapibus duis at velit eu",
    receipt: false,
  },
  {
    date: "1/26/2023",
    amount: 3782.39,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    receipt: true,
  },
  {
    date: "6/13/2023",
    amount: 1066.27,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
    receipt: false,
  },
  {
    date: "6/7/2023",
    amount: 1071.75,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
    receipt: false,
  },
  {
    date: "8/26/2022",
    amount: 3122.81,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
    receipt: false,
  },
  {
    date: "11/10/2022",
    amount: 3955.53,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
    receipt: false,
  },
  {
    date: "4/21/2023",
    amount: 8624.57,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
    receipt: false,
  },
  {
    date: "3/20/2023",
    amount: 651.81,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate",
    receipt: true,
  },
  {
    date: "8/30/2022",
    amount: 7937.94,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
    receipt: false,
  },
  {
    date: "10/9/2022",
    amount: 3237.14,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
    receipt: false,
  },
  {
    date: "9/2/2022",
    amount: 5239.34,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
    receipt: false,
  },
  {
    date: "12/23/2022",
    amount: 6136.25,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
    receipt: false,
  },
  {
    date: "1/20/2023",
    amount: 6350.32,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
    receipt: true,
  },
  {
    date: "11/27/2022",
    amount: 5377.65,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
    receipt: true,
  },
  {
    date: "1/27/2023",
    amount: 1997.19,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
    receipt: true,
  },
  {
    date: "5/12/2023",
    amount: 3930.79,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
    receipt: true,
  },
  {
    date: "1/7/2023",
    amount: 8957.0,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    receipt: true,
  },
  {
    date: "7/24/2022",
    amount: 6883.21,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
    receipt: true,
  },
  {
    date: "11/20/2022",
    amount: 2240.74,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas",
    receipt: false,
  },
  {
    date: "8/21/2022",
    amount: 8717.18,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
    receipt: true,
  },
  {
    date: "6/23/2023",
    amount: 1852.36,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
    receipt: true,
  },
  {
    date: "12/4/2022",
    amount: 7206.47,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    receipt: false,
  },
  {
    date: "1/24/2023",
    amount: 1424.21,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
    receipt: true,
  },
  {
    date: "9/8/2022",
    amount: 1725.88,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
    receipt: true,
  },
  {
    date: "3/12/2023",
    amount: 4701.54,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
    receipt: false,
  },
  {
    date: "2/14/2023",
    amount: 6649.45,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer",
    receipt: true,
  },
  {
    date: "9/3/2022",
    amount: 7310.13,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "mauris eget massa tempor convallis nulla neque libero convallis eget",
    receipt: false,
  },
  {
    date: "11/8/2022",
    amount: 1148.68,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
    receipt: false,
  },
  {
    date: "12/23/2022",
    amount: 6006.79,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
    receipt: true,
  },
  {
    date: "8/5/2022",
    amount: 5899.31,
    category: "Transportation Expenses",
    paymentMethod: "credit card",
    description:
      "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
    receipt: true,
  },
  {
    date: "2/7/2023",
    amount: 2195.46,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "justo eu massa donec dapibus duis at velit eu est congue elementum in",
    receipt: true,
  },
  {
    date: "9/11/2022",
    amount: 1450.75,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
    receipt: false,
  },
  {
    date: "9/9/2022",
    amount: 9831.22,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
    receipt: true,
  },
  {
    date: "8/10/2022",
    amount: 889.72,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
    receipt: true,
  },
  {
    date: "3/23/2023",
    amount: 5606.64,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
    receipt: false,
  },
  {
    date: "11/13/2022",
    amount: 6738.73,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
    receipt: true,
  },
  {
    date: "11/4/2022",
    amount: 8606.22,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "et tempus semper est quam pharetra magna ac consequat metus sapien ut",
    receipt: true,
  },
  {
    date: "7/4/2023",
    amount: 3387.1,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    receipt: false,
  },
  {
    date: "1/14/2023",
    amount: 8827.75,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
    receipt: false,
  },
  {
    date: "6/4/2023",
    amount: 344.7,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
    receipt: false,
  },
  {
    date: "6/21/2023",
    amount: 2501.89,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
    receipt: true,
  },
  {
    date: "5/21/2023",
    amount: 345.63,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt",
    receipt: false,
  },
  {
    date: "1/21/2023",
    amount: 3277.79,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
    receipt: true,
  },
  {
    date: "11/18/2022",
    amount: 5634.28,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description: "mi nulla ac enim in tempor turpis nec euismod scelerisque",
    receipt: false,
  },
  {
    date: "9/14/2022",
    amount: 7274.19,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description: "urna ut tellus nulla ut erat id mauris vulputate elementum",
    receipt: true,
  },
  {
    date: "3/22/2023",
    amount: 7875.32,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
    receipt: true,
  },
  {
    date: "7/6/2023",
    amount: 1285.19,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
    receipt: true,
  },
  {
    date: "7/9/2023",
    amount: 782.06,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
    receipt: true,
  },
  {
    date: "3/4/2023",
    amount: 3934.72,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
    receipt: true,
  },
  {
    date: "12/19/2022",
    amount: 4773.14,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
    receipt: false,
  },
  {
    date: "5/15/2023",
    amount: 978.71,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
    receipt: true,
  },
  {
    date: "3/2/2023",
    amount: 3509.25,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
    receipt: false,
  },
  {
    date: "9/9/2022",
    amount: 1718.41,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",
    receipt: false,
  },
  {
    date: "3/26/2023",
    amount: 1465.05,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium",
    receipt: false,
  },
  {
    date: "6/22/2023",
    amount: 7188.66,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi",
    receipt: false,
  },
  {
    date: "6/10/2023",
    amount: 8286.96,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",
    receipt: false,
  },
  {
    date: "4/3/2023",
    amount: 5670.42,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
    receipt: true,
  },
  {
    date: "9/27/2022",
    amount: 7632.29,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
    receipt: false,
  },
  {
    date: "9/24/2022",
    amount: 3281.66,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat",
    receipt: true,
  },
  {
    date: "5/30/2023",
    amount: 384.42,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
    receipt: false,
  },
  {
    date: "12/11/2022",
    amount: 5159.63,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
    receipt: true,
  },
  {
    date: "1/23/2023",
    amount: 112.35,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
    receipt: true,
  },
  {
    date: "1/10/2023",
    amount: 6791.09,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
    receipt: false,
  },
  {
    date: "12/29/2022",
    amount: 6300.28,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
    receipt: false,
  },
  {
    date: "10/31/2022",
    amount: 3841.73,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo",
    receipt: true,
  },
  {
    date: "3/15/2023",
    amount: 4171.21,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac",
    receipt: false,
  },
  {
    date: "1/29/2023",
    amount: 40.18,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
    receipt: true,
  },
  {
    date: "10/9/2022",
    amount: 6275.47,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
    receipt: true,
  },
  {
    date: "8/2/2022",
    amount: 133.1,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    receipt: true,
  },
  {
    date: "8/2/2022",
    amount: 1684.3,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit",
    receipt: false,
  },
  {
    date: "12/9/2022",
    amount: 1166.2,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
    receipt: true,
  },
  {
    date: "1/8/2023",
    amount: 5802.44,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
    receipt: false,
  },
  {
    date: "7/5/2023",
    amount: 2224.41,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc",
    receipt: true,
  },
  {
    date: "2/15/2023",
    amount: 9059.94,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    receipt: false,
  },
  {
    date: "11/3/2022",
    amount: 9269.5,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
    receipt: false,
  },
  {
    date: "2/1/2023",
    amount: 286.8,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo",
    receipt: true,
  },
  {
    date: "10/8/2022",
    amount: 7603.29,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    receipt: true,
  },
  {
    date: "5/16/2023",
    amount: 7117.32,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
    receipt: false,
  },
  {
    date: "8/27/2022",
    amount: 7265.18,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    receipt: false,
  },
  {
    date: "5/31/2023",
    amount: 2456.26,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
    receipt: false,
  },
  {
    date: "8/9/2022",
    amount: 5989.44,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
    receipt: true,
  },
  {
    date: "8/11/2022",
    amount: 8923.15,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
    receipt: true,
  },
  {
    date: "7/20/2022",
    amount: 1067.12,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
    receipt: false,
  },
  {
    date: "11/1/2022",
    amount: 390.51,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
    receipt: false,
  },
  {
    date: "8/2/2022",
    amount: 8860.62,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in",
    receipt: false,
  },
  {
    date: "7/27/2022",
    amount: 6309.41,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
    receipt: true,
  },
  {
    date: "2/9/2023",
    amount: 5309.63,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    receipt: true,
  },
  {
    date: "7/14/2022",
    amount: 4164.09,
    category: "Education and Professional Development",
    paymentMethod: "credit card",
    description:
      "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
    receipt: false,
  },
  {
    date: "7/10/2023",
    amount: 1615.42,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
    receipt: true,
  },
  {
    date: "7/15/2022",
    amount: 2824.06,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    receipt: true,
  },
  {
    date: "9/3/2022",
    amount: 6203.46,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
    receipt: true,
  },
  {
    date: "7/26/2022",
    amount: 276.41,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a",
    receipt: true,
  },
  {
    date: "4/11/2023",
    amount: 353.63,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat",
    receipt: false,
  },
  {
    date: "3/31/2023",
    amount: 7084.42,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere",
    receipt: true,
  },
  {
    date: "10/2/2022",
    amount: 891.3,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
    receipt: true,
  },
  {
    date: "1/5/2023",
    amount: 8225.29,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "semper rutrum nulla nunc purus phasellus in felis donec semper",
    receipt: false,
  },
  {
    date: "9/28/2022",
    amount: 1383.45,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
    receipt: true,
  },
  {
    date: "8/12/2022",
    amount: 4843.63,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
    receipt: true,
  },
  {
    date: "10/21/2022",
    amount: 5093.47,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description: "non mauris morbi non lectus aliquam sit amet diam in",
    receipt: true,
  },
  {
    date: "1/7/2023",
    amount: 8456.51,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
    receipt: false,
  },
  {
    date: "8/21/2022",
    amount: 4635.94,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    receipt: true,
  },
  {
    date: "4/23/2023",
    amount: 9209.25,
    category: "Housing Expenses",
    paymentMethod: "cash",
    description:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    receipt: true,
  },
  {
    date: "1/10/2023",
    amount: 87.28,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
    receipt: true,
  },
  {
    date: "10/9/2022",
    amount: 1753.24,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit",
    receipt: false,
  },
  {
    date: "2/16/2023",
    amount: 2240.91,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac",
    receipt: false,
  },
  {
    date: "3/21/2023",
    amount: 9394.06,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
    receipt: true,
  },
  {
    date: "12/11/2022",
    amount: 2976.09,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
    receipt: false,
  },
  {
    date: "2/19/2023",
    amount: 6704.32,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
    receipt: false,
  },
  {
    date: "10/26/2022",
    amount: 409.25,
    category: "Transportation Expenses",
    paymentMethod: "debit card",
    description:
      "ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
    receipt: true,
  },
  {
    date: "12/13/2022",
    amount: 2025.58,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis",
    receipt: true,
  },
  {
    date: "3/13/2023",
    amount: 7806.56,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "interdum in ante vestibulum ante ipsum primis in faucibus orci",
    receipt: true,
  },
  {
    date: "9/26/2022",
    amount: 9098.92,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
    receipt: false,
  },
  {
    date: "1/25/2023",
    amount: 6205.05,
    category: "Education and Professional Development",
    paymentMethod: "debit card",
    description:
      "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
    receipt: true,
  },
  {
    date: "6/23/2023",
    amount: 9180.38,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus",
    receipt: true,
  },
  {
    date: "6/13/2023",
    amount: 1524.39,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat",
    receipt: true,
  },
  {
    date: "1/15/2023",
    amount: 7440.48,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices",
    receipt: false,
  },
  {
    date: "11/12/2022",
    amount: 5776.78,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non",
    receipt: true,
  },
  {
    date: "11/10/2022",
    amount: 6273.95,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
    receipt: false,
  },
  {
    date: "1/30/2023",
    amount: 9125.62,
    category: "Insurance",
    paymentMethod: "cash",
    description: "consequat in consequat ut nulla sed accumsan felis ut at",
    receipt: true,
  },
  {
    date: "3/17/2023",
    amount: 3740.85,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue",
    receipt: true,
  },
  {
    date: "6/30/2023",
    amount: 5181.59,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
    receipt: true,
  },
  {
    date: "9/26/2022",
    amount: 8452.19,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
    receipt: true,
  },
  {
    date: "2/3/2023",
    amount: 1426.9,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
    receipt: true,
  },
  {
    date: "9/16/2022",
    amount: 2444.72,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
    receipt: true,
  },
  {
    date: "4/14/2023",
    amount: 1363.73,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
    receipt: true,
  },
  {
    date: "3/8/2023",
    amount: 9070.04,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut",
    receipt: false,
  },
  {
    date: "8/4/2022",
    amount: 6011.89,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
    receipt: true,
  },
  {
    date: "10/13/2022",
    amount: 7230.9,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
    receipt: true,
  },
  {
    date: "3/30/2023",
    amount: 4549.5,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description: "duis ac nibh fusce lacus purus aliquet at feugiat non",
    receipt: true,
  },
  {
    date: "11/30/2022",
    amount: 3468.69,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    receipt: true,
  },
  {
    date: "4/6/2023",
    amount: 3391.99,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
    receipt: true,
  },
  {
    date: "5/29/2023",
    amount: 2768.54,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    receipt: false,
  },
  {
    date: "11/29/2022",
    amount: 6526.7,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
    receipt: false,
  },
  {
    date: "6/21/2023",
    amount: 8996.38,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu",
    receipt: true,
  },
  {
    date: "3/4/2023",
    amount: 3428.12,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "at velit vivamus vel nulla eget eros elementum pellentesque quisque",
    receipt: false,
  },
  {
    date: "3/2/2023",
    amount: 2113.28,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
    receipt: false,
  },
  {
    date: "7/21/2022",
    amount: 7364.4,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description: "turpis enim blandit mi in porttitor pede justo eu massa",
    receipt: true,
  },
  {
    date: "9/16/2022",
    amount: 7568.98,
    category: "Debt Payments",
    paymentMethod: "credit card",
    description:
      "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
    receipt: true,
  },
  {
    date: "10/14/2022",
    amount: 3713.89,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum",
    receipt: true,
  },
  {
    date: "3/21/2023",
    amount: 7692.9,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
    receipt: true,
  },
  {
    date: "8/26/2022",
    amount: 4842.1,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in",
    receipt: false,
  },
  {
    date: "11/14/2022",
    amount: 6407.3,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
    receipt: false,
  },
  {
    date: "2/22/2023",
    amount: 7297.74,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque",
    receipt: false,
  },
  {
    date: "9/3/2022",
    amount: 8403.42,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in",
    receipt: true,
  },
  {
    date: "2/21/2023",
    amount: 5223.96,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis",
    receipt: false,
  },
  {
    date: "2/10/2023",
    amount: 6116.72,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
    receipt: true,
  },
  {
    date: "6/4/2023",
    amount: 9438.71,
    category: "Entertainment and Recreation",
    paymentMethod: "credit card",
    description:
      "proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
    receipt: true,
  },
  {
    date: "2/20/2023",
    amount: 5954.95,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
    receipt: true,
  },
  {
    date: "5/28/2023",
    amount: 6525.15,
    category: "Transportation Expenses",
    paymentMethod: "cash",
    description:
      "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
    receipt: false,
  },
  {
    date: "6/7/2023",
    amount: 622.18,
    category: "Housing Expenses",
    paymentMethod: "debit card",
    description:
      "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
    receipt: true,
  },
  {
    date: "6/29/2023",
    amount: 9513.31,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque",
    receipt: true,
  },
  {
    date: "9/2/2022",
    amount: 9550.62,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
    receipt: false,
  },
  {
    date: "10/23/2022",
    amount: 5079.4,
    category: "Miscellaneous Expenses",
    paymentMethod: "debit card",
    description:
      "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
    receipt: false,
  },
  {
    date: "10/28/2022",
    amount: 2245.41,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui",
    receipt: false,
  },
  {
    date: "3/3/2023",
    amount: 8301.11,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
    receipt: false,
  },
  {
    date: "5/15/2023",
    amount: 5204.57,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
    receipt: true,
  },
  {
    date: "9/15/2022",
    amount: 1209.21,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo",
    receipt: false,
  },
  {
    date: "3/1/2023",
    amount: 2764.85,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
    receipt: false,
  },
  {
    date: "1/11/2023",
    amount: 6657.8,
    category: "Debt Payments",
    paymentMethod: "debit card",
    description:
      "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
    receipt: false,
  },
  {
    date: "10/2/2022",
    amount: 8366.1,
    category: "Debt Payments",
    paymentMethod: "cash",
    description:
      "turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
    receipt: false,
  },
  {
    date: "12/9/2022",
    amount: 8290.34,
    category: "Food and Groceries",
    paymentMethod: "debit card",
    description:
      "felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
    receipt: false,
  },
  {
    date: "8/24/2022",
    amount: 8855.54,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description: "lacinia aenean sit amet justo morbi ut odio cras mi pede",
    receipt: false,
  },
  {
    date: "10/28/2022",
    amount: 5110.94,
    category: "Entertainment and Recreation",
    paymentMethod: "cash",
    description:
      "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    receipt: true,
  },
  {
    date: "3/17/2023",
    amount: 7530.25,
    category: "Housing Expenses",
    paymentMethod: "credit card",
    description:
      "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
    receipt: true,
  },
  {
    date: "11/9/2022",
    amount: 5772.18,
    category: "Insurance",
    paymentMethod: "debit card",
    description:
      "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    receipt: true,
  },
  {
    date: "5/22/2023",
    amount: 7894.53,
    category: "Utilities and Services",
    paymentMethod: "cash",
    description:
      "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
    receipt: false,
  },
  {
    date: "11/18/2022",
    amount: 3053.93,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
    receipt: true,
  },
  {
    date: "3/23/2023",
    amount: 3680.4,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
    receipt: true,
  },
  {
    date: "8/17/2022",
    amount: 5794.05,
    category: "Food and Groceries",
    paymentMethod: "cash",
    description:
      "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
    receipt: false,
  },
  {
    date: "2/5/2023",
    amount: 3674.01,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat",
    receipt: true,
  },
  {
    date: "8/7/2022",
    amount: 9391.3,
    category: "Entertainment and Recreation",
    paymentMethod: "debit card",
    description:
      "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue",
    receipt: false,
  },
  {
    date: "11/7/2022",
    amount: 8853.11,
    category: "Utilities and Services",
    paymentMethod: "debit card",
    description:
      "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",
    receipt: true,
  },
  {
    date: "9/18/2022",
    amount: 8029.03,
    category: "Miscellaneous Expenses",
    paymentMethod: "cash",
    description:
      "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
    receipt: false,
  },
  {
    date: "11/18/2022",
    amount: 9523.77,
    category: "Insurance",
    paymentMethod: "credit card",
    description:
      "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
    receipt: false,
  },
  {
    date: "1/6/2023",
    amount: 5858.93,
    category: "Utilities and Services",
    paymentMethod: "credit card",
    description:
      "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
    receipt: false,
  },
  {
    date: "12/12/2022",
    amount: 4575.74,
    category: "Miscellaneous Expenses",
    paymentMethod: "credit card",
    description:
      "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
    receipt: false,
  },
  {
    date: "12/28/2022",
    amount: 522.23,
    category: "Insurance",
    paymentMethod: "cash",
    description:
      "consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
    receipt: true,
  },
  {
    date: "10/10/2022",
    amount: 5638.43,
    category: "Education and Professional Development",
    paymentMethod: "cash",
    description:
      "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem",
    receipt: true,
  },
  {
    date: "3/23/2023",
    amount: 5874.82,
    category: "Food and Groceries",
    paymentMethod: "credit card",
    description:
      "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
    receipt: true,
  },
];

export default mockData;
