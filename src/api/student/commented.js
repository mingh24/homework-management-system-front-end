import * as axios from "@/common/myAxios";

export const getStudentHomework = homeworkId => axios.get("/student/commented/" + homeworkId);

export const getPageCount = (homeworkId, homeworkTitle) =>
    axios.get("/student/commented/page/count", {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle
    });

export const getPage = (index, homeworkId, homeworkTitle) =>
    axios.get("/student/commented/page/" + index, {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle
    });

export const pageSize = 7;