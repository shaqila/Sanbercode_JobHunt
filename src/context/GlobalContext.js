import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [dataJob, setDataJob] = useState(null);
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url:
      "https://media.istockphoto.com/id/1331491686/id/vektor/desain-elemen.webp?s=1024x1024&w=is&k=20&c=6TUmOJkvF_z4Af4vAdJKjSBvS0j5a_NidzHUffjWFv4=",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });
  const [fetchStatus, setFetchstatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  let navigate = useNavigate();

  // const fetchDataJob = () => {
  //   axios
  //     .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
  //     .then((res) => {
  //       setDataJob([...res.data.data]);
  //     })
  //     .catch((error) => {});
  // };

  // useEffect(() => {
  //   axios
  //     .get("https://dev-example.sanbercloud.com/api/job-vacancy")
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       setDataJob(res.data.data);
  //     })
  //     .catch((error) => {});
  // }, []);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          // console.log(...res.data.data);
          setDataJob([...res.data.data]);
        })
        .catch((error) => {});

      setFetchstatus(false);
    }
  }, [fetchStatus, setFetchstatus]);

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          { ...input },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )

        .then((res) => {
          // console.log(input);
          setFetchstatus(true);
          Swal.fire({
            title: "Success",
            text: "Berhasil menambahkan data baru!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((error) => {});
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          { ...input },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchstatus(true);
          navigate("/dashboard/list-job-vacancy");
        });
    }

    setCurrentId(-1);

    // setInput({
    //   title: "",
    //   job_description: "",
    //   job_qualification: "",
    //   job_type: "",
    //   job_tenure: "",
    //   job_status: 1,
    //   company_name: "",
    //   company_image_url:
    //     "https://media.istockphoto.com/id/1331491686/id/vektor/desain-elemen.webp?s=1024x1024&w=is&k=20&c=6TUmOJkvF_z4Af4vAdJKjSBvS0j5a_NidzHUffjWFv4=",
    //   company_city: "",
    //   salary_min: 0,
    //   salary_max: 0,
    // });
  };

  const handleEditData = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //   }
    // });
    navigate(`/dashboard/list-job-vacancy/edit/${idData}`);
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        setFetchstatus(true);
        console.log("berhasil delete");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(search);

    let fetchDataJob = async () => {
      setFetchstatus(true);
      let { data } = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      let dataJob = data.data;
      // console.log(dataJob);

      let searchData = dataJob.filter((res) => {
        return Object.values(res)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      console.log(searchData);

      setFetchstatus(false);
      setDataJob([...searchData]);
    };

    fetchDataJob();
  };

  //Format Rupiah
  const FormatRupiah = (angka, prefix) => {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  };
  //Handle Text Description
  const handleText = (e) => {
    if (e === null) {
      return "";
    } else {
      return e.slice(0, 160) + "...";
    }
  };

  //Initial Function & State
  let state = {
    dataJob,
    setDataJob,
    FormatRupiah,
    input,
    setInput,
    fetchStatus,
    setFetchstatus,
    currentId,
    setCurrentId,
    search,
    setSearch,
  };

  let handleFunction = {
    handleText,
    handleSubmit,
    handleInput,
    handleEditData,
    handleDelete,
    handleChangeSearch,
    handleSearch,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
