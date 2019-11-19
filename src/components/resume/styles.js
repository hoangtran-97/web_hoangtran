import colors from "../../constants/colors";

export default {
    bold: { fontWeight: "700" },
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        color: colors.silverSand
    },
    buttonSection: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 25,
        width: "100vw",
        fontWeight: "600",
    },
    buttonIcon: {
        width: 30,
        height: 30,
        color: colors.silverSand,
        margin: 20
    },
    button: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 35,
        fontWeight: "600",
        width: "100vw"
    },
    indexContainer: {

    },
    subContainer: {
        backgroundColor: colors.plainWhite,
        borderRadius: 20,
        padding: 10
    },
    cvContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    buttonDownload: {
        backgroundColor: colors.silverSand,
        width: 150,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        margin: 10
    },
    pdf: {
        height: 700, width: "70vw"
    },
    buttonDownloadText: {
        textDecoration: "none",
        color: colors.gunMetal,
        fontWeight: "700"
    }
};
