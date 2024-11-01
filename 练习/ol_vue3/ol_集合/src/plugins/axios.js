import axios from "axios";
export async function getCityBound() {
  try {
    const response = await axios.get(
      "https://geo.datav.aliyun.com/areas_v3/bound/320100_full.json"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  // await axios.get("https://geo.datav.aliyun.com/areas_v3/bound/320100_full.json")
  //   .then(function (response) {
  //     // 处理成功情况
  //     return response.data;
  //   })
  //   .catch(function (error) {
  //     // 处理错误情况
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // 总是会执行
  //   });

  //   return  await axios.get("https://geo.datav.aliyun.com/areas_v3/bound/320100_full.json")
}
