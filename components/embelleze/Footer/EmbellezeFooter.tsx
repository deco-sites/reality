import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

export interface Props {
  logo?: {
    image: LiveImage;
    description?: string;
  };
  text?: string[];
  imagens?: Array<{
    image: LiveImage;
    description?: string;
    link: string;
  }>;
}

export default function EmbellezeFooter({ text, imagens, logo }: Props) {
  return (
    <div class="bg-primary flex items-center flex-col py-8 px-4">
      {logo?.image && (
        <img src={logo?.image} alt={logo?.description} width="250px" />
      )}
      {text?.map((text) => (
        <p class="text-base-100 mt-4 text-center">
          {text}
        </p>
      ))}
      <ul class="flex justify-evenly flex-wrap gap-4">
        {imagens?.map((item) => (
          <li>
            <a href={item.link} target="_blank" rel="noopener noreferrer"></a>
            <img src={item.image} alt={item.description} max-height="120px" />
          </li>
        ))}
      </ul>
    </div>
  );
}
