# 语言模型
实际上通俗来讲就是成语接龙
# 样本分类

Zero shot: 零样本
One/Few Shot： 少量样本

# 翻译模型

* Encoder
> 双向解码，每一一个词都知道他之前的和后边的词
你         好         呀
你好呀    【你好呀】    【你好呀】

* Decoder
> 单向解码 One by One
你好呀
你->好->呀

# 微调
> 通过大量的句式的关键词预测出语言的类型：比如情感
通过Decoder 输出语言向量->Transformer->Linear->预测语言是哪一类


# 发展史
openai->Decoder(GPT)->Decoder Zero-shot->Decoder Few-shot(GPT3)->GPT-3(InstrucGPT)->GPT3.5(ChatGPT)

google:Transformer(Encoder+ Decoder)->Encoder+ 微调
# GPT 3模型的流程

1. 通过GPT3自有模型人工微调生成采样数据
2. 人工评估给予权重（Reward Mode）
3. 强化学习（PPO->RM） 用RM评价去更新册策略 以此迭代

# Evaluations 人工评判
1. 数据是否有毒性（偏见、种族歧视等）


# 局限

* 大规模语料
* 使用Decoder没有向前看的能力
* 文本学习，没有物理样本
* 安全性

# 思考
搜推模型升级为序列模型
Few-shot是规则还是经验的匹配


