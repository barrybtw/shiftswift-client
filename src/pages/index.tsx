import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
export default function Index() {
  // const posts = useSuspenseQuery(postsQueryOptions)
  console.log("Hello from index page!");

  return <div className="py-2 md:px-16 sm:px-8 xs:px-6 px-4">Home page!</div>;
}
const t = queryOptions({
  queryKey: ["test"],
  queryFn: () => {
    return new Promise((res) => res(1));
  },
});
Index.loader = () => {
  // queryClient.ensureQueryData(postsQueryOptions)
};
