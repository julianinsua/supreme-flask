import React from "react";
import { pipetas, matraces } from "../constants"; //esto lo voy a sacar de un contexto

export const dilutionFactor = (flasks = [1], pippetes = [1]) => {
	let factor = 1;
	flasks.forEach((flask) => {
		pippetes.forEach((pippete) => {
			factor *= pippete / flask;
		});
	});

	return factor;
};

export const viableDilutions = (iconc, fconc, err = 0.01) => {
	const pip = pipetas;
	const mat = matraces;
	let f = fconc / iconc;
	let combos = [];
	let viableCombos = [];

	if (f >= 1) {
		viableCombos.push(0);
	} else {
		pip.forEach((p, i) => {
			mat.forEach((m, j) => {
				if (p < m) {
					combos.push({
						pipeta: [p],
						matraz: [m],
						f: dilutionFactor(p, m),
						rank: i + j,
					});
				}
			});
		});

		combos.forEach((element) => {
			if (Math.abs(element.f - f) <= err) {
				viableCombos.push(element);
			}
		});
	}

	if (viableCombos.length === 0) {
		combos.forEach((dil1) => {
			combos.forEach((dil2) => {
				if (Math.abs(dil1.f * dil2.f - f) <= err) {
					viableCombos.push({
						matraz: [dil1.matraz, dil2.matraz],
						pipeta: [dil1.pipeta, dil2.pipeta],
						f: dil1.f * dil2.f,
						rank: dil1.rank + dil2.rank,
					});
				}
			});
		});
	}

	return viableCombos;
};
