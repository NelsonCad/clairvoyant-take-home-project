module.exports = {
    overview: {
        issuesResolved: {
            title: "security Issues Resolved",
            amount: 5,
        },
        inspectionCoverage: {
            title: "Inspection Coverage",
            databases: {
                title: "Databases",
                current: 20,
                total: 50
            },
            tables: {
                title: "Tables",
                current: 20,
                total: 50
            },
            files: {
                title: "Files",
                current: 130,
                total: 8000
            }
        },
        sensitiveDataLocations: {
            title: "Sensitive Data Location",
            dataSources: 3,
            databases: 5,
            tables: 8,
            files: 7
        }
    },
    dataDistChart: {
        key: 1000,
        title: "Sensitive Data Distribution by Data Source",
        width: 600,
        height: 300,
        dataset: [
            {
                name: "DS1",
                swift_code: 3,
                email: 2,
                US_Bank_Acc_Num: 5,
                Phone: 4,
                SSN: 12,
                US_Passport: 1,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS2",
                swift_code: 3,
                email: 2,
                US_Bank_Acc_Num: 5,
                Phone: 4,
                SSN: 12,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS3",
                swift_code: 4,
                email: 3,
                US_Bank_Acc_Num: 6,
                Phone: 5,
                SSN: 13,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS4",
                swift_code: 3,
                email: 3,
                US_Bank_Acc_Num: 6,
                Phone: 5,
                SSN: 12,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS5",
                swift_code: 2,
                email: 2,
                US_Bank_Acc_Num: 4,
                Phone: 4,
                SSN: 9,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS6",
                swift_code: 4,
                email: 3,
                US_Bank_Acc_Num: 5,
                Phone: 5,
                SSN: 10,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            }
        ],
    },
    tinyGraphs: [
        {
            info: {
                chart: {
                    caption: "Sensitive Info by Type",
                    subcaption: "(Count of Data Sources)",
                    aligncaptionwithcanvas: "0",
                    captionpadding: "0",
                    decimals: "0",
                    centerlabel: "<b>$label</b>: <b>$value</b>",
                    theme: "fusion"
                },
                data: [
                    {
                        label: "IBAN",
                        value: "2"
                    },
                    {
                        label: "Swift Code",
                        value: "4"
                    },
                    {
                        label: "Email",
                        value: "8"
                    },
                    {
                        label: "US Bank Acc. Num.",
                        value: "4"
                    },
                    {
                        label: "Phone",
                        value: "5"
                    },
                    {
                        label: "SSN",
                        value: "2"
                    },
                    {
                        label: "US Passport",
                        value: "4"
                    },
                    {
                        label: "ABA Routing",
                        value: "5"
                    },
                    {
                        label: "DOB",
                        value: "4"
                    },
                    {
                        label: "Credit Card",
                        value: "3"
                    }
                ]
            },
            type: "doughnut2d",
            width: 100,
            height: 100,
            id: 1
        },
        {
            info: {
                chart: {
                    caption: "Sensitive Info by Category",
                    subcaption: "(Count of Data Sources)",
                    aligncaptionwithcanvas: "0",
                    captionpadding: "0",
                    decimals: "0",
                    centerlabel: "<b>$label</b>: <b>$value</b>",
                    theme: "fusion"
                },
                data: [
                    {
                        label: "PII",
                        value: "9"
                    },
                    {
                        label: "HIPAA",
                        value: "4"
                    },
                    {
                        label: "FERPA",
                        value: "8"
                    },
                    {
                        label: "Class3",
                        value: "4"
                    },
                    {
                        label: "Class4",
                        value: "5"
                    },
                    {
                        label: "Class5",
                        value: "2"
                    },
                    {
                        label: "Class6",
                        value: "4"
                    },
                    {
                        label: "Class7",
                        value: "5"
                    },
                    {
                        label: "PCI",
                        value: "4"
                    },
                    {
                        label: "IIYWASWIWTBOTSA4AATWUOTDTMIHCIMFH",
                        value: "3"
                    }
                ]
            },
            type: "doughnut2d",
            width: 100,
            height: 100,
            id: 2
        },
        {
            info: {
                chart: {
                    caption: "Inspection Coverage",
                    subcaption: "by Data Sources",
                    yaxisname: "(inspection coverage (%)",
                    aligncaptionwithcanvas: "0",
                    plottooltext: "<b>$dataValue</b>% of <b>$label</b> inspected",
                    theme: "fusion"
                },
                data: [
                    {
                        label: "DS1",
                        value: "75"
                    },
                    {
                        label: "DS2",
                        value: "43"
                    },
                    {
                        label: "DS3",
                        value: "94"
                    },
                    {
                        label: "DS4",
                        value: "38"
                    }
                ]
            },
            type: "bar2d",
            width: 100,
            height: 100,
            id: 3
        },
        {
            info: {
                chart: {
                    caption: "Count of Sensitive Info Type",
                    subcaption: "by Data Sources",
                    yaxisname: "(Count of unique Sensitive Info Types)",
                    aligncaptionwithcanvas: "0",
                    plottooltext: "<b>$dataValue</b> unique data typse within <b>$label</b>",
                    theme: "fusion"
                },
                data: [
                    {
                        label: "DS1",
                        value: "22"
                    },
                    {
                        label: "DS2",
                        value: "14"
                    },
                    {
                        label: "DS3",
                        value: "28"
                    },
                    {
                        label: "DS4",
                        value: "12"
                    }
                ]
            },
            type: "bar2d",
            width: 100,
            height: 100,
            id: 4
        },
        {
            info: {
                chart: {
                    caption: "Count of Sensitive Info Category",
                    subcaption: "by Data Sources",
                    yaxisname: "(Count of unique Sensitive InfoType Categories)",
                    aligncaptionwithcanvas: "0",
                    plottooltext: "<b>$dataValue</b> unique data typse within <b>$label</b>",
                    theme: "fusion"
                },
                data: [
                    {
                        label: "DS1",
                        value: "22"
                    },
                    {
                        label: "DS2",
                        value: "14"
                    },
                    {
                        label: "DS3",
                        value: "28"
                    },
                    {
                        label: "DS4",
                        value: "12"
                    },
                    {
                        label: "DS5",
                        value: "16"
                    },
                    {
                        label: "DS6",
                        value: "9"
                    },
                    {
                        label: "DS7",
                        value: "8"
                    },
                    {
                        label: "DSLite",
                        value: "2"
                    },
                    {
                        label: "DS1/2",
                        value: "7"
                    }
                ]
            },
            type: "scrollbar2d",
            width: 100,
            height: 100,
            id: 5
        },
        {
            info: {
                chart: {
                    caption: "Sensitive Data Record Count",
                    subcaption: "(By DaTa SoUrCeS)",
                    placevaluesinside: "1",
                    showvalues: "0",
                    theme: "fusion"
                },
                categories: [
                    {
                        category: [
                            {
                                label: "DS1"
                            },
                            {
                                label: "DS2"
                            },
                            {
                                label: "DS3"
                            },
                            {
                                label: "DS4"
                            }
                        ]
                    }
                ],
                dataset: [
                    {
                        seriesname: "Class 1",
                        data: [
                            {
                                value: "5000"
                            },
                            {
                                value: "5000"
                            },
                            {
                                value: "6000"
                            },
                            {
                                value: "10000"
                            }
                        ]
                    },
                    {
                        seriesname: "Class 2",
                        data: [
                            {
                                value: "20000"
                            },
                            {
                                value: "20000"
                            },
                            {
                                value: "20000"
                            },
                            {
                                value: "20000"
                            }
                        ]
                    },
                    {
                        seriesname: "Class 3",
                        data: [
                            {
                                value: "30000"
                            },
                            {
                                value: "30000"
                            },
                            {
                                value: "29000"
                            },
                            {
                                value: "20000"
                            }
                        ]
                    }
                ]
            },
            type: "stackedbar2d",
            width: 100,
            height: 100,
            id: 6
        }
    ]
}