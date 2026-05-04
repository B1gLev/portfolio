import About from "@/components/About";
import Item from "@/components/Item";
import ScrollWrapper from "@/components/ui/scroll/ScrollWrapper";

export default function Home() {
  return (
    <>
    <About />
    <ScrollWrapper>
      <Item 
        year="2022 - 2025" 
        company="MineZone"
        title="Full-stack Developer & SysAdmin"
        tech={["Next.js", "Node.js", "Go", "PostgreSQL", "Docker", "Redis", "Linux", "Tailwind", "TypeScript"]}
        experience="I was responsible for the entire technical backend: managing the Docker-based infrastructure and databases, performing critical API fixes, and continuously expanding the webshop with new, user-centric features."
      />
      <Item 
        year="2023 - 2024"
        company="MineMass"
        title="Full-stack Developer & SysAdmin"
        tech={["TypeScript", "PHP", "Go", "MySQL", "Docker", "Redis", "Linux", "Grafana"]}
        experience="I was responsible for the entire technical backend: managing the Docker-based infrastructure and databases, while developing a custom API integration to bridge CraftingStore with the szamlazz.hu third-party invoicing platform."
      />
      <Item 
        year="2021 - 2024"
        company="RivalsNetwork"
        title="Developer & SysAdmin"
        tech={["Java", "Node.js", "Docker", "MariaDB", "Redis", "Linux"]}
        experience="Responsible for the backend systems and game server optimization to ensure high performance and stability. I also implemented a custom CraftingStore integration."
      />
      <Item 
        year="2025"
        company="AssetPay"
        title="Frontend Developer"
        tech={["Next.js", "TypeScript", "Tailwind"]}
        experience="Developed the modern frontend for a CS:GO skin marketplace, implementing a seamless user interface for buying and selling assets. I was responsible for integrating the client's existing API to handle real-time inventory and market data."
        />
    </ScrollWrapper>
    </>
  );
}
