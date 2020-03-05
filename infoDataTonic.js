module.exports = {
    overview: {
        resolvedIssues: 5,
        inspectionCoverage: {
            databases: {
                current: 20,
                total: 50
            },
            tables: {
                current: 20,
                total: 50
            },
            files: {
                current: 130,
                total: 8000
            }
        },
        sensitiveDataLocations: {
            dataSources: 3,
            databases: 5,
            tables: 8,
            files: 7
        }
    },
    dataDistChart: {
        chart: {
            caption: "Sensitive Data Distribution by Data Source",
            showsum: "10",
            plottooltext: "<b>$dataValue</b> records distributed via $seriesName in $label",
            theme: "fusion",
            drawcrossline: "5"
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
                    },
                    {
                        label: "DS5"
                    },
                    {
                        label: "DS6"
                    }
                ]
            }
        ],
        dataset: [
            {
                seriesName: "Swift Code",
                data: [
                    {
                        value: "3"
                    },
                    {
                        value: "3"
                    },
                    {
                        value: "4"
                    },
                    {
                        value: "4"
                    },
                    {
                        value: "3"
                    },
                    {
                        value: "4"
                    }
                ]
            },
            {
                seriesName: "Email",
                data: [
                    {
                        value: "2"
                    },
                    {
                        value: "2"
                    },
                    {
                        value: "3"
                    },
                    {
                        value: "3"
                    },
                    {
                        value: "2"
                    },
                    {
                        value: "3"
                    }
                ]
            },
            {
                seriesName: "U.S Bank Acc. Num",
                data: [
                    {
                        value: "5"
                    },
                    {
                        value: "5"
                    },
                    {
                        value: "6"
                    },
                    {
                        value: "6"
                    },
                    {
                        value: "5"
                    },
                    {
                        value: "6"
                    }
                ]
            },
            {
                seriesName: "Phone",
                data: [
                    {
                        value: "5"
                    },
                    {
                        value: "5"
                    },
                    {
                        value: "6"
                    },
                    {
                        value: "6"
                    },
                    {
                        value: "5"
                    },
                    {
                        value: "6"
                    }
                ]
            },
            {
                seriesName: "SSN",
                data: [
                    {
                        value: "13"
                    },
                    {
                        value: "13"
                    },
                    {
                        value: "15"
                    },
                    {
                        value: "14"
                    },
                    {
                        value: "11"
                    },
                    {
                        "value": "13"
                    }
                ]
            },
            {
                seriesName: "US Passport",
                data: [
                    {
                        value: "1"
                    },
                    {
                        value: "2"
                    },
                    {
                        value: "2"
                    },
                    {
                        value: "2"
                    },
                    {
                        value: "2"
                    },
                    {
                        value: "2"
                    }
                ]
            },
            {
                seriesName: "ABA Routing",
                data: [
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    }
                ]
            },
            {
                seriesName: "DOB",
                data: [
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "1"
                    }
                ]
            },
            {
                seriesName: "Credit Card",
                data: [
                    {
                        value: "3"
                    },
                    {
                        value: "3"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "4"
                    },
                    {
                        value: "1"
                    },
                    {
                        value: "3"
                    }
                ]
            }
        ]
    },
    TinyGraphs: [
        {
            SensitiveInfoType: {
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
                        value:"4"
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
            type: "doughnut2d"
        },
        {
            SensitiveInfoCate: {
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
            type: "doughnut2d"
        },
        {
            inspectionCoverage: {
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
            type: "bar2d"
        },
        {
            SensitiveInfoCountType: {
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
            type: "bar2d"
        },
        {
            SensitiveInfoCountCate: {
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
            type: "scrollbar2d"
        },
        {
            SensitiveDataRecordCount: {
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
            type: "stackedbar2d"
        }
    ]
}