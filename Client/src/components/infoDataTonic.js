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
    tinyGraphs: {
        DonutCharts: [
            {
                title: "Sensitive Info by Type",
                data: [
                    {
                        name: "IBAN",
                        value: 2
                    },
                    {
                        name: "Swift Code",
                        value: 4
                    },
                    {
                        name: "Email",
                        value: 8
                    },
                    {
                        name: "US Bank Acc. Num.",
                        value: 4
                    },
                    {
                        name: "Phone",
                        value: 5
                    },
                    {
                        name: "SSN",
                        value: 2
                    },
                    {
                        name: "US Passport",
                        value: 4
                    },
                    {
                        name: "ABA Routing",
                        value: 5
                    },
                    {
                        name: "DOB",
                        value: 4
                    },
                    {
                        name: "Credit Card",
                        value: 3
                    }
                ],
                width: 800,
                height: 600,
                key: 1
            },
            {
                data: [
                    {
                        name: "PII",
                        value: 9
                    },
                    {
                        name: "HIPAA",
                        value: 4
                    },
                    {
                        name: "FERPA",
                        value: 8
                    },
                    {
                        name: "Class3",
                        value: 4
                    },
                    {
                        name: "Class4",
                        value: 5
                    },
                    {
                        name: "Class5",
                        value: 2
                    },
                    {
                        name: "Class6",
                        value: 4
                    },
                    {
                        name: "Class7",
                        value: 5
                    },
                    {
                        name: "PCI",
                        value: 4
                    },
                    {
                        name: "IIYWASWIWTBOTSA4AATWUOTDTMIHCIMFH",
                        value: 3
                    }
                ],
                title: "Sensitive Info by Category",
                width: 100,
                height: 100,
                key: 2
            }
        ],
        BarCharts: [
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
                title: "Inspection Coverage",
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
                title: "Sensitive Info by Type",
                width: 100,
                height: 100,
                id: 4
            }
        ],
        sensitiveInfoCate: {
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
        }
    },
    stackedbBars: {
        sensitiveDataRecordCount: {
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
    }
}
