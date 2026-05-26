// Functions.

function render_project(project_name,
    figure_path,
    title_name,
    author_list,
    material_list,
    award_name = null) {
    if (document.getElementsByName(project_name).length === 0) {
        return;
    }

    var img = document.createElement('img');
    img.src = figure_path;
    img.setAttribute('style',
        'width: 100%; max-height: 120px; object-fit: cover;');

    var title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerHTML = title_name;

    var author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.innerHTML = '';
    for (var idx = 0; idx < author_list.length; idx++) {
        if (idx < author_list.length - 1 &&
            (author_list[idx + 1] == 'equal' ||
                author_list[idx + 1] == 'corresponding' ||
                author_list[idx + 1] == 'project_lead')) {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                author_list[idx + 1] +
                '"></span>');
            idx++
        } else {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                '"></span>');
        }
        if (idx < author_list.length - 1) {
            author.innerHTML += ', ';
        }
    }

    var material = document.createElement('div');
    material.setAttribute('class', 'material');
    material_list.innerHTML = '';
    for (var idx = 0; idx < material_list.length; idx++) {
        var label = material_list[idx][0];
        var url = material_list[idx][1];
        var badge = '';
        if (label === 'Code') {
            var m = url.match(/github\.com\/([^\/]+)\/([^\/\?#]+)/);
            if (m) {
                var repo = m[1] + '/' + m[2].replace(/\.git$/, '');
                badge = ' <img src="https://img.shields.io/github/stars/' +
                    repo +
                    '?style=social" style="vertical-align:middle;height:18px;margin-left:4px;" alt="GitHub stars">';
            }
        }
        material.innerHTML += (
            '<a href="' + url + '" target="_blank">' + label + badge + '</a>');
        if (idx < material_list.length - 1) {
            material.innerHTML += ' / ';
        }
    }

    if (award_name) {
        var award = document.createElement('div');
        award.setAttribute('class', 'award');
        award.innerHTML = award_name;
    }

    var row = document.getElementsByName(project_name)[0];
    var cell = row.insertCell(0);
    cell.setAttribute('width', '25%');
    cell.appendChild(img);
    cell = row.insertCell(1);
    cell.appendChild(title);
    cell.appendChild(author);
    cell.appendChild(material);
    if (award_name) {
        cell.appendChild(award);
    }
};

function render_author(author_name, link = null, alias = null) {
    var list = document.getElementsByName(author_name);
    for (var idx = 0; idx < list.length; idx++) {
        var contribution = list[idx].title;
        var tailing = '';
        if (contribution === 'equal') {
            tailing = '*';
        } else if (contribution === 'corresponding') {
            tailing = '<sup>+<sup>';
        } else if (contribution === 'project_lead') {
            tailing = '<sup>&dagger;</sup>';
        }

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Mengting Chen') {
            list[idx].setAttribute('class', 'me');
        }
    }
};










// Template.

render_project(
    project_name = 'template',
    figure_path = './assets/projects/',
    title_name = '',
    author_list = [
        '',
    ],
    material_list = [
        ['Paper', ''],
        ['Project', ''],
        ['Code', ''],
        ['Demo', ''],
    ],
    award_name = null,
);










// Projects.
render_project(
    project_name = 'Tstars-Tryon',
    figure_path = './assets/projects/Tstars-Tryon.png',
    title_name = 'Tstars-Tryon 1.0: Robust and Realistic Virtual Try-On for Diverse Fashion Items',
    author_list = [
        'Mengting Chen',
        'project_lead',
        'Zhengrui Chen',
        'Yongchao Du',
        'Zuan Gao',
        'Taihang Hu',
        'Jinsong Lan',
        'Chao Lin',
        'Yefeng Shen',
        'Xingjian Wang',
        'Zhao Wang',
        'Zhengtao Wu',
        'Xiaoli Xu',
        'Zhengze Xu',
        'Hao Yan',
        'Mingzhou Zhang',
        'Jun Zheng',
        'Qinye Zhou',
        'Xiaoyong Zhu',
        'Bo Zheng',
    ],
    material_list = [
        ['Report', 'https://arxiv.org/abs/2604.19748'],
        ['Benchmark', 'https://huggingface.co/datasets/TaobaoTmall-AlgorithmProducts/Tstars-VTON'],
        ['Media', 'https://mp.weixin.qq.com/s/9xsNpPF5bKI3L5V1cRvB_w'],
    ],
    award_name = null,
);

render_project(
    project_name = 'iTryOn',
    figure_path = './assets/projects/itryon.gif',
    title_name = 'iTryOn: Mastering Interactive Video Virtual Try-On with Spatial-Semantic Guidance',
    author_list = [
        'Jun Zheng',
        'Zhengze Xu',
        'Mengting Chen',
        'project_lead',
        'Jing Wang',
        'Jinsong Lan',
        'Xiaoyong Zhu',
        'Kaifu Zhang',
        'Bo Zheng',
        'Xiaodan Liang',
    ],
    material_list = [
        ['ICML 2026', 'https://icml.cc/virtual/2026/poster/65275'],
    ],
    award_name = null,
);

render_project(
    project_name = 'PAE',
    figure_path = './assets/projects/PAE.jpg',
    title_name = 'What Matters for Diffusion-Friendly Latent Manifold? Prior-Aligned Autoencoders for Latent Diffusion',
    author_list = [
        'Zhengrong Yue',
        'Taihang Hu',
        'Mengting Chen',
        'project_lead',
        'Haiyu Zhang',
        'Zihao Pan',
        'Tao Liu',
        'Zikang Wang',
        'Jinsong Lan',
        'Xiaoyong Zhu',
        'Bo Zheng',
        'Yali Wang',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/abs/2605.07915'],
        ['Project', 'https://zhengrongyue.github.io/pae.github.io/'],
        ['HuggingFace', 'https://huggingface.co/yuezhengrong/PAE-collections'],
        ['ModelScope', 'https://www.modelscope.cn/models/ZhengrongYue/PAE-Collections'],
        ['Code', 'https://github.com/ZhengrongYue/PAE'],
    ],
    award_name = null,
);

render_project(
    project_name = 'FashionChameleon',
    figure_path = './assets/projects/FashionChameleon.gif',
    title_name = 'FashionChameleon: Towards Real-Time and Interactive Human-Garment Video Customization',
    author_list = [
        'Quanjian Song',
        'Yefeng Shen',
        'Mengting Chen',
        'project_lead',
        'Hao Sun',
        'Jinsong Lan',
        'Xiaoyong Zhu',
        'Bo Zheng',
        'Liujuan Cao',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/abs/2605.15824'],
        ['Project', 'https://quanjiansong.github.io/projects/FashionChameleon/'],
        ['HuggingFace', 'https://huggingface.co/datasets/QuanjianSong/HGC-Bench'],
        ['Code', 'https://github.com/quanjiansong/FashionChameleon'],
    ],
    award_name = null,
);

render_project(
    project_name = 'CTDM',
    figure_path = './assets/projects/CTDM.png',
    title_name = 'Continuous-Time Distribution Matching for Few-Step Diffusion Distillation',
    author_list = [
        'Tao Liu',
        'Hao Yan',
        'Mengting Chen',
        'project_lead',
        'Taihang Hu',
        'Zhengrong Yue',
        'Zihao Pan',
        'Jinsong Lan',
        'Xiaoyong Zhu',
        'Ming-Ming Cheng',
        'Bo Zheng',
        'Yaxing Wang',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/abs/2605.06376'],
        ['Project', 'https://byliutao.github.io/cdm_page/'],
        ['Code', 'https://github.com/byliutao/cdm'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Beyond-Static-Scenes',
    figure_path = './assets/projects/Beyond-Static-Scenes.gif',
    title_name = 'Beyond Static Scenes: Camera-controllable Background Generation for Human Motion',
    author_list = [
        'Mingshuai Yao',
        'Mengting Chen',
        'project_lead',
        'Qinye Zhou',
        'Yabo Zhang',
        'Ming Liu',
        'Xiaoming Li',
        'Shaohui Liu',
        'Chen Ju',
        'Shuai Xiao',
        'Qingwen Liu',
        'Jinsong Lan',
        'Wangmeng Zuo',
    ],
    material_list = [
        ['ICME 2026', 'https://arxiv.org/abs/2504.02004'],
        ['Project', 'https://yaomingshuai.github.io/Beyond-Static-Scenes.github.io/'],
    ],
    award_name = null,
);

render_project(
    project_name = 'ORION',
    figure_path = './assets/projects/ORION.jpg',
    title_name = 'ORION: Decoupling and Alignment for Unified Autoregressive Understanding and Generation',
    author_list = [
        'Taihang Hu',
        'Mengting Chen',
        'project_lead',
        'Jinsong Lan',
        'Xiaoyong Zhu',
        'Kaifu Zhang',
        'Ming-Ming Cheng',
        'Bo Zheng',
        'Yaxing Wang',
    ],
    material_list = [
        ['ICLR 2026', 'https://iclr.cc/virtual/2026/poster/10009679'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Tunnel Try-on',
    figure_path = './assets/projects/tunnel-try-on.png',
    title_name = 'Tunnel Try-on: Excavating Spatial-temporal Tunnels for High-quality Virtual Try-on in Videos',
    author_list = [
        'Zhengze Xu',
        'Mengting Chen',
        'project_lead',
        'Zhao Wang',
        'Linyu Xing',
        'Zhonghua Zhai',
        'Nong Sang',
        'Jinsong Lan',
        'Shuai Xiao',
        'Changxin Gao',
    ],
    material_list = [
        ['ACM Multimedia 2024', 'https://arxiv.org/abs/2404.17571'],
        ['Project', 'https://mengtingchen.github.io/tunnel-try-on-page/'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Wear-Any-Way',
    figure_path = './assets/projects/wear-any-way.png',
    title_name = 'Wear-Any-Way: Manipulable Virtual Try-on via Sparse Correspondence Alignment',
    author_list = [
        'Mengting Chen',
        'Xi Chen',
        'Zhonghua Zhai',
        'Chen Ju',
        'Xuewen Hong',
        'Jinsong Lan',
        'Shuai Xiao',
    ],
    material_list = [
        ['ECCV 2024', 'https://arxiv.org/abs/2403.12965'],
        ['Project', 'https://mengtingchen.github.io/wear-any-way-page/'],
        ['Media', 'https://mp.weixin.qq.com/s/MWFfUrj_-bitHxgeOtDIKQ'],
    ],
    award_name = null,
);

render_project(
    project_name = 'LivePhoto',
    figure_path = './assets/projects/livephoto.gif',
    title_name = 'LivePhoto: Real Image Animation with Text-guided Motion Control',
    author_list = [
        'Xi Chen',
        'Zhiheng Liu',
        'Mengting Chen',
        'Yutong Feng',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list = [
        ['ECCV 2024', 'https://arxiv.org/pdf/2312.02928.pdf'],
        ['Project', 'https://xavierchen34.github.io/LivePhoto-Page/'],
        ['Demo', 'https://www.youtube.com/watch?v=M2vzrTYAsQI'],
        ['Code', 'https://github.com/XavierCHEN34/LivePhoto'],
    ],
    award_name = null,
);


render_project(
    project_name = 'DTN',
    figure_path = './assets/projects/DTN.jpg',
    title_name = 'Diversity transfer network for few-shot learning',
    author_list = [
        'Mengting Chen',
        'Yuxin Fang',
        'Xinggang Wang',
        'Heng Luo',
        'Yifeng Geng',
        'Xinyu Zhang',
        'Chang Huang',
        'Wenyu Liu',
        'Bo Wang',
    ],
    material_list = [
        ['AAAI 2020 (Oral)', 'https://ojs.aaai.org/index.php/AAAI/article/view/6628'],
        ['Code', 'https://github.com/Yuxin-CV/DTN'],
    ],
    award_name = null,
);

render_project(
    project_name = 'SRF',
    figure_path = './assets/projects/SRF.jpg',
    title_name = 'Structured random forest for label distribution learning',
    author_list = [
        'Mengting Chen',
        'Xinggang Wang',
        'Bin Feng',
        'Wenyu Liu',
    ],
    material_list = [
        ['Neurocomputing 2018', 'https://www.sciencedirect.com/science/article/abs/pii/S0925231218310622'],
    ],
    award_name = null,
);

render_project(
    project_name = 'MimicBrush',
    figure_path = './assets/projects/MimicBrush.png',
    title_name = 'Zero-shot Image Editing with Reference Imitation',
    author_list = [
        'Xi Chen',
        'Yutong Feng',
        'Mengting Chen',
        'Yiyang Wang',
        'Shilong Zhang',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list = [
        ['NeurIPS 2024', 'https://arxiv.org/abs/2406.07547'],
        ['Project', 'https://xavierchen34.github.io/MimicBrush-Page/'],
        ['Demo', 'https://huggingface.co/spaces/xichenhku/MimicBrush'],
        ['Code', 'https://github.com/ali-vilab/MimicBrush'],
    ],
    award_name = null,
);



// Authors.
render_author('Jun Zheng');
render_author('Jing Wang');
render_author('Xiaodan Liang');
render_author('Zhengrui Chen');
render_author('Yongchao Du');
render_author('Zuan Gao');
render_author('Chao Lin');
render_author('Yefeng Shen');

render_author('Xingjian Wang');
render_author('Xiaoli Xu');
render_author('Zhengtao Wu');
render_author('Hao Yan');
render_author('Mingzhou Zhang');
render_author('Qinye Zhou');


render_author('Xiaoyong Zhu');
render_author('Kaifu Zhang');
render_author('Ming-Ming Cheng');
render_author('Bo Zheng');
render_author('Yaxing Wang');
render_author('Taihang Hu');
render_author('Mingshuai Yao');
render_author('Qingwen Liu');
render_author('Tao Liu');
render_author('Zhengrong Yue');
render_author('Zihao Pan');
render_author('Haiyu Zhang');
render_author('Zikang Wang');
render_author('Yali Wang');
render_author('Quanjian Song');
render_author('Hao Sun');
render_author('Liujuan Cao');
render_author('Yabo Zhang');
render_author('Ming Liu');
render_author('Xiaoming Li');
render_author('Shaohui Liu');
render_author('Wangmeng Zuo');
render_author('Bin Feng', 'https://scholar.google.com.hk/citations?user=nRc8u6gAAAAJ&hl=zh-CN');
render_author('Bo Wang', 'https://scholar.google.com/citations?user=37FDILIAAAAJ&hl=en');
render_author('Changxin Gao', 'https://scholar.google.com/citations?user=4tku-lwAAAAJ&hl=en');
render_author('Chen Ju', 'https://voide1220.github.io/');
render_author('Chang Huang', 'https://scholar.google.com/citations?user=IyyEKyIAAAAJ&hl=en');
render_author('Hengshuang Zhao', 'https://hszhao.github.io/');
render_author('Heng Luo', 'https://scholar.google.fr/citations?user=0xIrC1cAAAAJ&hl=en');
render_author('Jinsong Lan');
render_author('Linyu Xing', 'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=y19jyMwAAAAJ');
render_author('Mengting Chen', 'https://scholar.google.com.hk/citations?user=LcoK9ZEAAAAJ&hl=zh-CN');
render_author('Nong Sang', 'https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl=zh-CN');
render_author('Shilong Zhang', 'https://jshilong.github.io/');
render_author('Shuai Xiao');
render_author('Wenyu Liu', 'https://scholar.google.com/citations?user=D7jDk7gAAAAJ&hl=zh-CN');
render_author('Xi Chen', 'https://xavierchen34.github.io/');
render_author('Xinggang Wang', 'https://scholar.google.com/citations?user=qNCTLV0AAAAJ&hl=en');
render_author('Xuewen Hong');
render_author('Xinyu Zhang', 'https://scholar.google.co.in/citations?user=M7hnG9oAAAAJ&hl=en');
render_author('Yifeng Geng',);
render_author('Yiyang Wang',);
render_author('Yuxin Fang', 'https://scholar.google.com/citations?user=_Lk0-fQAAAAJ&hl=en');
render_author('Yu Liu', 'https://scholar.google.com/citations?user=8zksQb4AAAAJ');
render_author('Yujun Shen', 'https://shenyujun.github.io/');
render_author('Yutong Feng', 'https://scholar.google.com/citations?user=mZwJLeUAAAAJ');
render_author('Zhao Wang');
render_author('Zhengze Xu', 'https://scholar.google.co.uk/citations?user=ItKODP4AAAAJ&hl=en');
render_author('Zhiheng Liu', 'https://johanan528.github.io/');
render_author('Zhonghua Zhai', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=o4SDCAYAAAAJ');
render_author('');