# MFFT-2021 source notes

The reflection-impulsivity module uses the public MFFT-2021 stimulus package and follows its core procedure:

- 2 practice trials and 20 scored trials.
- One target image and six candidates per trial.
- The exact match is randomly positioned among five distractors.
- The 20 formal target positions use the balanced MFFT-2021 pool (positions 1-4 three times each; positions 5-6 four times each), shuffled without replacement. Practice target positions are 5 and 2.
- Incorrect selections remain recoverable until the exact match is selected.
- First-response latency and error count are retained.

Primary source:

Viator, R. E., Wu, Y.-J., & Viator, A. S. (2022). Testing the validity and reliability of the Matching Familiar Figures Test-2021: An updated behavioral measure of reflection-impulsivity. *Frontiers in Psychology, 13*, 977808. https://doi.org/10.3389/fpsyg.2022.977808

Stimulus and PsyToolkit package:

https://osf.io/7v4yg

The web implementation reports the raw behavioral measures and an immediate reference profile for this dimension. The temporary reference lines use the Study 1 undergraduate sample means reported by Viator et al. (2022): MFFT-2021 Accuracy = 86.95 and mean first-response time = 29.40 seconds. The four possible profiles are reflective, impulsive, fast-accurate, and slow-inaccurate. These published means are not universal diagnostic cutoffs and should be replaced with locally calibrated values from the intended Chinese university student sample before formal deployment.

## ILS Sequential-Global source notes

The knowledge-organization module is a contextualized Chinese adaptation of the 11-item Sequential-Global subscale of the Felder-Soloman Index of Learning Styles (ILS). It retains the original forced-choice structure, item direction, and score calculation:

- Original ILS item numbers: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, and 44.
- Option A is scored as Sequential and option B as Global.
- The reported score is Sequential responses minus Global responses, producing an odd-numbered score from -11 to +11.
- Absolute scores of 1 or 3 indicate a mild preference / relative balance, 5 or 7 a moderate preference, and 9 or 11 a strong preference.

The web presentation groups the item content into three university-learning contexts:

1. Entering an unfamiliar course: items 4, 8, 20, and 24.
2. Solving problems and completing coursework: items 12, 28, 32, and 44.
3. Reading materials and making knowledge connections: items 16, 36, and 40.

Primary instrument:

Felder, R. M., & Soloman, B. A. *Index of Learning Styles Questionnaire*. North Carolina State University. https://learningstyles.webtools.ncsu.edu/

Reliability, validity, and interpretation:

Felder, R. M., & Spurlin, J. (2005). Applications, reliability and validity of the Index of Learning Styles. *International Journal of Engineering Education, 21*(1), 103-112.

Litzinger, T. A., Lee, S. H., Wise, J. C., & Felder, R. M. (2007). A psychometric study of the Index of Learning Styles. *Journal of Engineering Education, 96*(4), 309-319. https://doi.org/10.1002/j.2168-9830.2007.tb00941.x

Mandarin-language validation reference:

Wang, J., & Mendori, T. (2015). The reliability and validity of Felder-Silverman Index of Learning Styles in Mandarin version. *Information Engineering Express, 1*(3), 1-8. https://doi.org/10.52731/iee.v1.i3.38

### Limitation

The wording in this prototype is a new contextualized Chinese adaptation, not an official or independently validated Chinese edition. The published psychometric evidence belongs to the source instruments and does not automatically transfer to this version. Before formal research use, the wording should undergo forward translation and back-translation, expert content review, cognitive interviews, and psychometric evaluation with the intended Chinese university-student sample.

## ILS Visual-Verbal source notes

The information-representation module is a contextualized Chinese adaptation of the 11-item Visual-Verbal subscale of the Felder-Soloman Index of Learning Styles. It measures preferred information formats, not visual ability, verbal ability, or spatial reasoning.

- Original ILS item numbers: 3, 7, 11, 15, 19, 23, 27, 31, 35, 39, and 43.
- Option A is scored as Visual and option B as Verbal.
- The reported score is Visual responses minus Verbal responses, producing an odd-numbered score from -11 to +11.
- Absolute scores of 1 or 3 indicate a mild preference / relative balance, 5 or 7 a moderate preference, and 9 or 11 a strong preference.

The web presentation groups the item content into three contexts:

1. Receiving new information in class: items 7, 11, 15, and 31.
2. Recalling and reviewing information: items 3, 19, 27, and 35.
3. Representing information in campus life: items 23, 39, and 43.

Felder and Spurlin (2005) reported a four-week test-retest correlation of 0.870 for the Visual-Verbal scale and Cronbach alpha values ranging from 0.56 to 0.69 across four studies. Litzinger et al. (2007) reported internal consistency above 0.70 and found two related factors: preferred information format for input, and preferred information format for memory or recall. Item 39 did not have its largest loading on either factor; it is retained here to preserve the published 11-item scoring structure.

The Mandarin-language study by Wang and Mendori (2015) used responses from 198 Chinese-native undergraduate students from four universities. It reported alpha = 0.644 for the Visual-Verbal scale. In that sample, 51% showed a moderate or strong visual preference, 7% a moderate or strong verbal preference, and 41.9% a mild preference / relative balance. These figures describe that sample and are not universal norms.

Construct boundary reference:

Mayer, R. E., & Massa, L. J. (2003). Three facets of visual and verbal learners: Cognitive ability, cognitive style, and learning preference. *Journal of Educational Psychology, 95*(4), 833-846. https://doi.org/10.1037/0022-0663.95.4.833

### Limitation

As with the contextualized Sequential-Global module, the published psychometric evidence does not automatically transfer to the wording used in this prototype. The module should be described as a contextualized Chinese adaptation and validated with the intended university-student population before formal research deployment. Results should be reported as preferences rather than fixed types or indicators of ability.
