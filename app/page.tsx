import { Terminal, Shield, Cpu, Code, Award, Mail, Github, Linkedin, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row h-screen p-3 gap-3 overflow-hidden bg-[#0a0a0a] text-[#d4d4d4] font-mono select-none border-4 border-[#1a1a1a]">
      {/* Sidebar - Window 1 */}
      <aside className="w-full md:w-72 flex flex-col gap-3 h-full overflow-y-auto shrink-0 pb-4 md:pb-0">
        
        {/* Profile / Status Pane */}
        <div className="flex-none border-2 border-[#00ff00] p-4 bg-[#0a0a0a] flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b-2 border-[#333] pb-2 text-[#00ff00]">
            <Terminal size={18} />
            <span className="font-bold tracking-wider text-sm">SYSTEM_STATUS</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#00ff00] leading-none mb-2 underline uppercase tracking-wider">Temesgen Melaku</h1>
            <p className="text-sm italic opacity-80 mb-2">Cybersecurity Student & Software Explorer</p>
            <div className="space-y-1 text-xs opacity-70 font-mono">
              <p className="flex justify-between"><span>USER_ID:</span> <span className="text-[#00ff00]">0xTeme</span></p>
              <p className="flex justify-between"><span>STATUS:</span> <span className="text-[#00ff00] animate-pulse">LISTENING</span></p>
              <p className="flex justify-between"><span>LOC:</span> <span className="text-[#d4d4d4]">Bahir Dar, ET</span></p>
            </div>
          </div>
          <div className="border-t-2 border-[#333] pt-4 flex flex-col gap-1 text-sm font-mono">
            <a href="#about" className="group hover:text-black hover:bg-[#00ff00] px-2 py-1.5 transition-colors flex items-center gap-2">
              <span className="text-[#00ff00] group-hover:text-black">&gt;</span> ./about.sh
            </a>
            <a href="#skills" className="group hover:text-black hover:bg-[#00ff00] px-2 py-1.5 transition-colors flex items-center gap-2">
              <span className="text-[#00ff00] group-hover:text-black">&gt;</span> ./skills.sh
            </a>
            <a href="#projects" className="group hover:text-black hover:bg-[#00ff00] px-2 py-1.5 transition-colors flex items-center gap-2">
              <span className="text-[#00ff00] group-hover:text-black">&gt;</span> ./projects.sh
            </a>
            <a href="#certs" className="group hover:text-black hover:bg-[#00ff00] px-2 py-1.5 transition-colors flex items-center gap-2">
              <span className="text-[#00ff00] group-hover:text-black">&gt;</span> ./certs.sh
            </a>
          </div>
        </div>

        {/* Contact Pane */}
        <div className="border-2 border-white/20 bg-[#111] p-4 flex-1 flex flex-col min-h-0">
          <div className="flex items-center gap-2 border-b-2 border-[#333] pb-2 text-[#00ff00] mb-4">
            <Mail size={18} />
            <span className="font-bold tracking-wider text-xs uppercase">CONTACT.SOCKET</span>
          </div>
          <div className="flex flex-col gap-2 text-xs font-mono">
            <a href="https://github.com/0xTeme" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center hover:text-black hover:bg-[#00ff00] p-2 transition-colors">
              <div className="flex items-center gap-2"><Github size={14} className="shrink-0" /> <span>GITHUB</span></div> <span className="text-[#00ff00] group-hover:text-black truncate">0xTeme</span>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center hover:text-black hover:bg-[#00ff00] p-2 transition-colors">
              <div className="flex items-center gap-2"><Linkedin size={14} className="shrink-0" /> <span>LI</span></div> <span className="text-[#00ff00] group-hover:text-black truncate">temesgen-melaku</span>
            </a>
            <a href="https://t.me/TemesgenMN" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center hover:text-black hover:bg-[#00ff00] p-2 transition-colors">
              <div className="flex items-center gap-2"><Send size={14} className="shrink-0" /> <span>TEL</span></div> <span className="text-[#00ff00] group-hover:text-black truncate">@TemesgenMN</span>
            </a>
            <a href="mailto:temezgens@gmail.com" className="flex justify-between items-center hover:text-black hover:bg-[#00ff00] p-2 transition-colors">
              <div className="flex items-center gap-2"><Mail size={14} className="shrink-0" /> <span>EMAIL</span></div> <span className="text-[#00ff00] group-hover:text-black truncate">temezgens@gmail</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col gap-3 overflow-y-auto pb-4 md:pb-0 scroll-smooth pr-2">
        
        {/* Top Pane - Header / Terminal */}
        <div className="border-2 border-[#333] bg-[#1a1a1a] p-6 relative group hover:border-[#00ff00] transition-colors shrink-0">
          <div className="absolute top-0 right-0 bg-[#333] text-[10px] px-2 py-1 group-hover:bg-[#00ff00] group-hover:text-black transition-colors font-mono uppercase tracking-widest font-bold">
            [0] zsh
          </div>
          <div className="font-mono text-sm">
            <p className="text-[#00ff00] mb-2">$ whoami</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#d4d4d4] mb-6 uppercase tracking-tight">Temesgen Melaku</h2>
            <div className="bg-[#00ff0022] p-3 border-l-4 border-[#00ff00] text-xs leading-relaxed">
              <p className="text-[#00ff00] mb-2 font-bold">$ cat objective.txt</p>
              <p className="text-[#d4d4d4]">
                I am a cybersecurity student passionate about exploring the digital landscape, 
                with a strong focus on offensive security and cloud security. 
                My objective is to secure a cybersecurity role where I can apply my skills, 
                sustain my family, and continuously grow my expertise in protecting critical infrastructures.
              </p>
            </div>
          </div>
        </div>

        {/* Grid for About and Skills */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 shrink-0">
          
          {/* About Pane */}
          <div id="about" className="border-2 border-[#333] bg-[#0a0a0a] p-6 relative group hover:border-[#00a3ff] transition-colors">
            <div className="absolute top-0 right-0 bg-[#333] text-[10px] px-2 py-1 group-hover:bg-[#00a3ff] group-hover:text-black transition-colors font-mono uppercase tracking-widest font-bold">
              about.md
            </div>
            <div className="flex items-center gap-2 border-b-2 border-[#333] pb-2 mb-4 text-[#00a3ff]">
              <Shield size={18} />
              <span className="font-bold tracking-widest text-xs uppercase">BIOGRAPHY_&_EDUCATION</span>
            </div>
            <div className="space-y-4 text-xs opacity-90 font-mono">
              <div>
                <span className="text-[#00a3ff] font-bold uppercase">[ORIGIN]</span>
                <p className="mt-1">Born and raised in Bahir Dar, Ethiopia.</p>
              </div>
              <div>
                <span className="text-[#00a3ff] font-bold uppercase">[BACKGROUND]</span>
                <p className="mt-1">My curiosity has led me to explore various disciplines, but I have found my true calling in computing and cybersecurity.</p>
              </div>
              <div className="border-2 border-[#333] p-4 mt-4 bg-[#111]">
                <span className="text-[#00a3ff] font-bold uppercase">[EDUCATION_LOG]</span>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-2">
                    <span className="text-[#00a3ff]">-</span>
                    <div>
                      <p className="text-[#d4d4d4]">Bahir Dar STEM Incubation Center</p>
                      <p className="text-[10px] opacity-70">High School - Ignited computing interest</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00a3ff]">-</span>
                    <div>
                      <p className="text-[#d4d4d4]">Bahir Dar University</p>
                      <p className="text-[10px] opacity-70">Degree in Cybersecurity (Pursuing)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Pane */}
          <div id="skills" className="border-2 border-[#333] bg-[#0a0a0a] p-6 relative group hover:border-[#888] transition-colors">
            <div className="absolute top-0 right-0 bg-[#333] text-[10px] px-2 py-1 group-hover:bg-[#888] group-hover:text-black transition-colors font-mono uppercase tracking-widest font-bold">
              skills.json
            </div>
            <div className="flex items-center gap-2 border-b-2 border-[#333] pb-2 mb-4 text-[#888]">
              <Cpu size={18} />
              <span className="font-bold tracking-widest text-xs uppercase">SYSTEM_STATS</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
              <div className="space-y-3">
                <p className="text-[#888] mb-3 text-[10px] uppercase tracking-widest font-bold">Core_Competencies</p>
                <div className="text-[10px]">
                  <span className="block mb-1">NETWORKING</span>
                  <div className="w-full h-1.5 bg-[#222]"><div className="bg-[#00a3ff] h-full w-[85%]"></div></div>
                </div>
                <div className="text-[10px]">
                  <span className="block mb-1">LINUX ADMIN</span>
                  <div className="w-full h-1.5 bg-[#222]"><div className="bg-[#00a3ff] h-full w-[90%]"></div></div>
                </div>
                <div className="text-[10px]">
                  <span className="block mb-1">PEN TESTING</span>
                  <div className="w-full h-1.5 bg-[#222]"><div className="bg-[#00a3ff] h-full w-[75%]"></div></div>
                </div>
              </div>
              <div>
                <p className="text-[#888] mb-3 text-[10px] uppercase tracking-widest font-bold">Tools_&_Languages</p>
                <div className="flex flex-wrap gap-2">
                  <span className="border-2 border-[#333] bg-[#1a1a1a] px-2 py-1 text-[10px]">Burp Suite</span>
                  <span className="border-2 border-[#333] bg-[#1a1a1a] px-2 py-1 text-[10px]">Wireshark</span>
                  <span className="border-2 border-[#333] bg-[#1a1a1a] px-2 py-1 text-[10px]">Python</span>
                  <span className="border-2 border-[#333] bg-[#1a1a1a] px-2 py-1 text-[10px] opacity-70">C (Learning)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Pane */}
        <div id="projects" className="border-2 border-[#333] bg-[#0a0a0a] p-6 relative group hover:border-[#00a3ff] transition-colors shrink-0">
          <div className="absolute top-0 right-0 bg-[#333] text-[10px] px-2 py-1 group-hover:bg-[#00a3ff] group-hover:text-black transition-colors font-mono uppercase tracking-widest font-bold">
            projects/
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Code size={18} className="text-[#00a3ff]" />
            <span className="font-bold tracking-widest text-xs uppercase bg-[#333] text-[#d4d4d4] px-2 py-1 inline-block">PROJECTS_DIR/</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
            
            <a href="https://github.com/fmet1202/Secure-Password-Vault" target="_blank" rel="noopener noreferrer" className="border-l-4 border-[#555] bg-[#111] p-4 hover:border-[#00a3ff] transition-all flex flex-col group/card relative overflow-hidden">
              <div className="absolute inset-0 bg-[#00a3ff]/5 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none"></div>
              <h3 className="text-[#00a3ff] font-bold text-sm mb-2 group-hover/card:text-white flex items-center gap-2">
                $ ./secure_vault --run
              </h3>
              <p className="text-[11px] leading-tight opacity-70 mb-4 flex-1">
                A secure password vault implemented in C. Features memory-safe operations and cryptographic principles for secure credential storage.
              </p>
              <div className="text-[10px] text-[#00a3ff] opacity-70 group-hover/card:opacity-100 flex justify-between items-center mt-auto pt-2">
                <span className="uppercase font-bold">[ VIEW_REPO ]</span>
                <span>-&gt;</span>
              </div>
            </a>

            <a href="https://github.com/Code-Geez/SOC-Dashboard" target="_blank" rel="noopener noreferrer" className="border-l-4 border-[#555] bg-[#111] p-4 hover:border-[#00a3ff] transition-all flex flex-col group/card relative overflow-hidden">
              <div className="absolute inset-0 bg-[#00a3ff]/5 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none"></div>
              <h3 className="text-[#00a3ff] font-bold text-sm mb-2 group-hover/card:text-white flex items-center gap-2">
                $ python3 soc_dashboard.py
              </h3>
              <p className="text-[11px] leading-tight opacity-70 mb-4 flex-1">
                A Security Operations Center dashboard sample project. Visualizes threat intelligence and network metrics for rapid incident response.
              </p>
              <div className="text-[10px] text-[#00a3ff] opacity-70 group-hover/card:opacity-100 flex justify-between items-center mt-auto pt-2">
                <span className="uppercase font-bold">[ VIEW_REPO ]</span>
                <span>-&gt;</span>
              </div>
            </a>

            <div className="border-l-4 border-[#555] bg-[#111] p-4 flex flex-col group/card relative">
              <h3 className="text-[#00a3ff] font-bold text-sm mb-2 flex items-center gap-2">
                OverTheWire: Bandit
              </h3>
              <p className="text-[11px] leading-tight opacity-70 mb-4 flex-1">
                Completed the OverTheWire Bandit wargame. Developed strong Linux command line skills, SSH proficiency, and fundamental security concepts.
              </p>
              <div className="text-[10px] text-[#00ff00] flex justify-between items-center mt-auto pt-2">
                <span className="uppercase font-bold">STATUS</span>
                <span>[ COMPLETED ]</span>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications Pane */}
        <div id="certs" className="border-2 border-[#ffb800] bg-[#0a0a0a] p-6 relative group hover:border-yellow-400 transition-colors shrink-0">
          <div className="absolute top-0 right-0 bg-[#ffb800] text-black text-[10px] px-2 py-1 group-hover:bg-yellow-400 transition-colors font-mono uppercase tracking-widest font-bold">
            certifications/
          </div>
          <div className="flex items-center gap-2 mb-4 text-[#ffb800]">
            <Award size={18} />
            <span className="font-bold tracking-widest text-xs uppercase">CERTIFICATIONS_STUB</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 font-mono">
            <a href="https://www.codecademy.com/profiles/0xTeme/certificates/14166ac5dbcc4206a32f7c9b42eb5a2d" target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-[#333] bg-[#111] p-4 flex flex-col hover:border-[#ffb800] transition-all group/cert">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#ffb800]">
                  <span className="font-bold">#</span>
                </div>
                <div>
                  <h4 className="text-[#d4d4d4] text-[11px] font-bold leading-tight">Certified in Cybersecurity (CC)</h4>
                  <p className="text-[10px] opacity-70 mt-1">ISC2 / Codecademy</p>
                </div>
              </div>
              <div className="mt-auto pt-2 flex justify-between items-center">
                <span className="text-[10px] opacity-70">ID: 14166...</span>
                <span className="text-[10px] text-[#ffb800] border-b border-[#ffb800] opacity-0 group-hover/cert:opacity-100 transition-opacity">VERIFY</span>
              </div>
            </a>

            <a href="https://www.codecademy.com/profiles/0xTeme/certificates/06984a073b064e61879cca3e82a9b3d2" target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-[#333] bg-[#111] p-4 flex flex-col hover:border-[#ffb800] transition-all group/cert">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#ffb800]">
                  <span className="font-bold">#</span>
                </div>
                <div>
                  <h4 className="text-[#d4d4d4] text-[11px] font-bold leading-tight">Fundamentals of Cybersecurity</h4>
                  <p className="text-[10px] opacity-70 mt-1">Codecademy</p>
                </div>
              </div>
              <div className="mt-auto pt-2 flex justify-between items-center">
                <span className="text-[10px] opacity-70">ID: 06984...</span>
                <span className="text-[10px] text-[#ffb800] border-b border-[#ffb800] opacity-0 group-hover/cert:opacity-100 transition-opacity">VERIFY</span>
              </div>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
