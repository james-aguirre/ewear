import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import getFeatured from "@/actions/getFeatured";
import FeaturedList from "@/components/ui/FeaturedList";

export const revalidate = 0;

const HomePage = async () => {
  const featured = await getFeatured();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:pg-8">
          <FeaturedList title="Featured Products" items={featured} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
