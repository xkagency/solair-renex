import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const faqItems = [
  {
    question: "First question goes here",
    answer:
      "Answer ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac nullam fermentum odio in nunc, aenean. In urna non urna, feugiat. Leo non, iaculis est euismod amet lacus, eu, dignissim. Curabitur id nunc non fames.",
    icon: "/figmaAssets/mask-group.png",
  },
  {
    question: "Second question goes here",
    answer:
      "Answer ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac nullam fermentum odio in nunc, aenean. In urna non urna, feugiat. Leo non, iaculis est euismod amet lacus, eu, dignissim. Curabitur id nunc non fames.",
    icon: "/figmaAssets/mask-group-1.png",
  },
  {
    question: "Third question goes here",
    answer:
      "Answer ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac nullam fermentum odio in nunc, aenean. In urna non urna, feugiat. Leo non, iaculis est euismod amet lacus, eu, dignissim. Curabitur id nunc non fames.",
    icon: "/figmaAssets/mask-group-2.png",
  },
  {
    question: "Fourth question goes here",
    answer:
      "Answer ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac nullam fermentum odio in nunc, aenean. In urna non urna, feugiat. Leo non, iaculis est euismod amet lacus, eu, dignissim. Curabitur id nunc non fames.",
    icon: "/figmaAssets/mask-group-3.png",
  },
];

export const DivWrapper = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-white">
      <section className="mx-auto flex w-full max-w-[1920px] justify-center px-6 py-7 sm:px-10 md:px-16 lg:px-20">
        <div className="flex w-full max-w-[432px] flex-col items-center md:max-w-[520px] lg:max-w-[430px]">
          <header className="mb-4 flex flex-col items-center text-center">
            <h1 className="[font-family:'Manrope',Helvetica] text-[28px] font-bold leading-tight tracking-[-0.84px] text-[#131921] sm:text-[34px]">
              Frequently asked questions
            </h1>
            <p className="mt-2 max-w-[360px] [font-family:'Manrope',Helvetica] text-[10px] font-light leading-4 text-[#6b7280] sm:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </header>
          <div className="flex w-full flex-col gap-[10px]">
            {faqItems.map((item, _index) => (
              <Card
                key={item.question}
                className="w-full rounded-[3px] border-0 bg-white shadow-[0px_10px_50px_#0000000d]"
              >
                <CardContent className="flex gap-3 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex shrink-0 pt-0.5">
                    <img
                      className="h-[14px] w-[14px]"
                      alt="Mask group"
                      src={item.icon}
                    />
                  </div>
                  <article className="flex min-w-0 flex-1 flex-col">
                    <h2 className="[font-family:'Manrope',Helvetica] text-[14px] font-bold leading-[1.35] tracking-[-0.42px] text-[#131921]">
                      {item.question}
                    </h2>
                    <p className="mt-2 [font-family:'Manrope',Helvetica] text-[10px] font-light leading-[1.6] text-[#4b5563]">
                      {item.answer}
                    </p>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex w-full justify-center">
            <Button
              type="button"
              className="h-auto min-w-[190px] rounded-none border-0 bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] px-10 py-3 [font-family:'Manrope',Helvetica] text-[14px] font-semibold leading-6 text-white shadow-none hover:opacity-95"
            >
              Enroll now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
