// const useLessons = (): ContentListHook => {
//   const [data, setData] = useState<ContentDto[] | null>(null);
//   const [error, setError] = useState<null | unknown>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchContent = async () => {
//       setLoading(true);
//       try {
//         const content = await fetch(`http://${host}/content`);
//         const contentData = await content.json();
//         setData(contentData?.data);
//         setError(false);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchContent();
//   }, []);
//   return {
//     data,
//     setData,
//     status: {
//       error,
//       loading,
//       ready: error == null && !loading && data != null,
//     },
//   };
// };
