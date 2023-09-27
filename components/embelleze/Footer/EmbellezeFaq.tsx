import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

export type ISection = {
  title: string;
  items?: Array<{
    label: string;
    href?: string;
  }>;
};

export type SocialMedia = {
  image: LiveImage;
  href: string;
  description?: string;
};

export interface Props {
  section?: Array<ISection>;
  social?: {
    title: string;
    items?: Array<SocialMedia>;
  };
  payments?: {
    title: string;
    items?: Array<{ image: LiveImage; description?: string }>;
  };
}

function EmbellezeFaq({ section, social, payments }: Props) {
  return (
    <div class="flex-wrap flex justify-between m-auto md:w-85 w-11/12 flex-col md:flex-row my-16">
      {section?.map(({ title, items }: ISection) => (
        <section class="flex flex-col my-4 mr-4">
          <h2 class="text-primary text-xl uppercase">{title}</h2>
          <>
            {items?.map(({ label, href }) => (
              <a class="mt-2" href={href}>{label}</a>
            ))}
          </>
        </section>
      ))}
      <section class="flex flex-col">
        {social && (
          <section class="flex flex-col my-4 mr-4">
            <h2 class="text-primary text-xl uppercase">{social?.title}</h2>
            <div class="flex flex-wrap flex-row">
              {social?.items?.map(({ href, image, description }) => (
                <a class="mt-2 mr-2" href={href}>
                  <img
                    class="rounded-full bg-slate-200 flex align-middle justify-center"
                    src={image}
                    alt={description}
                    width="40px"
                    height="40px"
                  />
                </a>
              ))}
            </div>
          </section>
        )}
        {payments && (
          <section class="flex flex-col my-4 mr-4">
            <h2 class="text-primary text-xl uppercase">{payments?.title}</h2>
            <div class="flex flex-wrap flex-row">
              {payments?.items?.map(({ image, description }) => (
                <img
                  class="rounded-lg flex align-middle justify-center"
                  src={image}
                  alt={description}
                  width="50px"
                  height="30px"
                />
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}

export default EmbellezeFaq;
